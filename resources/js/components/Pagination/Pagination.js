import React from "react";
import { ArrowDown } from "/img/icons/contact/contactIcons";
import "./Pagination.css";
import {Link} from '@inertiajs/inertia-react';


export const Pagination = ({prev_page_url, next_page_url, links}) => {
  return (
    <div className="pagination flex centered">
        <Link href={prev_page_url}>
            <button className="arrow" style={{ transform: "rotate(-90deg)" }}>
                <ArrowDown color="#1DBFCC" />
            </button>
        </Link>

        {links.slice(1, -1).map((item)=>{
            return(
                <Link href={item.url}>
                    <button className={`pageNum ${item.active ? "active" : "" }`}>{item.label}</button>
                </Link>
            );
        })}

        <Link href={next_page_url}>
            <button className="arrow" style={{ transform: "rotate(90deg)" }}>
                <ArrowDown color="#1DBFCC" />
            </button>
        </Link>
    </div>
  );
};
