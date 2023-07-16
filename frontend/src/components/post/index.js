import { Link } from "react-router-dom";
import "./style.css";
import Moment from "react-moment";
import { Dots, Public } from "../../svg";
import ReactsPopup from "./ReactsPopup";
import { useState } from "react";
import CreateComments from "./CreateComments";
import PostMenu from "./PostMenu";
import { clubs } from "../../data/clubs";
const Post = ({ post, user }) => {
    console.log("");

    console.log("user>>>", user);
    const clubAvatar = clubs.find(
        (club) => club._id === post.clubId
    )?.avatarImage;
    const clubName = clubs.find((club) => club._id === post.clubId)?.clubName;
    console.log("clubAvatar>>>", clubAvatar);

    const [visible, setVisible] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="post mb-5">
            <div className="post_header">
                <Link to={`/profile/`} className="post_header_left">
                    <img src={clubAvatar} alt="" />
                    <div className="header_col">
                        <div className="post_profile_name">{clubName}</div>
                        <div className="post_profile_privacy_date">
                            <Moment fromNow interval={30}>
                                {post.time}
                            </Moment>
                            <Public color="#828387" />
                        </div>
                    </div>
                </Link>
                <div
                    className="post_header_right hover1"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <Dots color="#828387" />
                </div>
            </div>
            {post.background ? (
                <div
                    className="post_bg"
                    style={{ backgroundImage: `url(${post.background})` }}
                >
                    <div className="post_bg_text">{post.text}</div>
                </div>
            ) : (
                <>
                    <div className="post_text">{post.content}</div>
                    {post.image && (
                        <div
                            className="post_image grid_1 p-1"
                            style={{
                                backgroundImage: `url(${post.image})`,
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        ></div>
                    )}
                    {/* {post.images && post.images.length && (
                        <div
                            className={
                                post.images.length === 1
                                    ? "grid_1"
                                    : post.images.length === 2
                                    ? "grid_2"
                                    : post.images.length === 3
                                    ? "grid_3"
                                    : post.images.length === 4
                                    ? "grid_4"
                                    : post.images.length >= 5 && "grid_5"
                            }
                        >
                            {post.images.slice(0, 5).map((image, i) => {
                                return (
                                    <img
                                        src={image.url}
                                        alt=""
                                        className={`img-${i}`}
                                        key={i}
                                    />
                                );
                            })}
                            {post.images.length > 5 && (
                                <div className="more-pics-shadow">
                                    +{post.images.length - 5}
                                </div>
                            )}
                        </div>
                    )} */}
                </>
            )}
            <div className="post_infos">
                <div className="reacts_count">
                    <div className="reacts_count_imgs"></div>
                    <div className="reacts_count_num"></div>
                </div>
                <div className="to_right">
                    <div className="comments_count">13 comments</div>
                    <div className="share_count">1 Share</div>
                </div>
            </div>
            <div className="post_actions">
                <ReactsPopup visible={visible} setVisible={setVisible} />
                <div
                    className="post_action hover1"
                    onMouseOver={() => {
                        setTimeout(() => {
                            setVisible(true);
                        }, 500);
                    }}
                    onMouseLeave={() => {
                        setTimeout(() => {
                            setVisible(false);
                        }, 500);
                    }}
                >
                    <i className="like_icon"></i>
                    <span>Like</span>
                </div>
                <div className="post_action hover1">
                    <i className="comment_icon"></i>
                    <span>comment</span>
                </div>
                <div className="post_action hover1">
                    <i className="share_icon"></i>
                    <span>Share</span>
                </div>
            </div>
            <div className="comments_wrap">
                <div className="comments_order"></div>
                <CreateComments user={user} />
            </div>
            {showMenu && (
                <PostMenu
                    userId={user.id}
                    postUserId={post.user._id}
                    imagesLength={post?.images?.length}
                    setShowMenu={setShowMenu}
                />
            )}
        </div>
    );
};
export default Post;
