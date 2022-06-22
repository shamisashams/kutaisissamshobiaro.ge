import React from "react";
import { usePage } from "@inertiajs/inertia-react";

export const SocialMedia = ({ color }) => {
    const { ginstagram, gfacebook } = usePage().props;

    return (
        <div className="socialmedia flex centered">
            <a
                href={gfacebook.value}
                target="_blank"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9.415"
                    height="17.579"
                    viewBox="0 0 9.415 17.579"
                >
                    <path
                        id="Icon_awesome-facebook-f"
                        data-name="Icon awesome-facebook-f"
                        d="M10.408,9.888,10.9,6.707H7.843V4.642A1.591,1.591,0,0,1,9.637,2.924h1.388V.215A16.924,16.924,0,0,0,8.561,0C6.047,0,4.4,1.524,4.4,4.282V6.707H1.609V9.888H4.4v7.691H7.843V9.888Z"
                        transform="translate(-1.609)"
                        fill={color}
                    />
                </svg>
            </a>
        </div>
    );
};
