import React from "react";
import styled from "styled-components";
import avatar from '../../img/avatar.png';
import { menuItems } from "../../utils/menuItems";
import { signout } from "../../utils/icons";

export default function Navigation({ active, setActive }) {
    const NavStyled = styled.nav`
        padding: 2rem 1.5rem;
        width: 280px;
        height: 100%;
        background: white;
        border: 3px solid #FFFFFF;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 1rem;

        .user-icon {
            display: flex;
            align-items: center;
            gap: 1rem;

            img {
                width: 90px;
                height: 90px;
                object-fit: cover;
            }

            h2 {
                color: rgba(34, 34, 96, 1);
            }

            p {
                color: rgba(34, 34, 96, 0.6);
            }
        }

        .menu-items {
            display: flex;
            flex-direction: column;
            font-size: 15px;
            height: 380px;
            gap: 1rem;
            margin-top: 1rem;

            li {
                display: grid;
                grid-template-columns: 40px auto;
                align-items: center;
                margin: 0.6rem 0;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.4s ease-in-out;
                color: rgba(34, 34, 96, 0.6);
                padding-left: 1rem;
                position: relative; /* Add position relative for the active indicator */

                i {
                    color: rgba(34, 34, 96, 0.6);
                    font-size: 1.4rem;
                    transition: all 0.4s ease-in-out;
                }
            }

            .active {
                color: rgba(34, 34, 96, 1) !important;
                
                i {
                    color: rgba(34, 34, 96, 1) !important;
                }

                &::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 4px;
                    height: 100%;
                    background: #222260;
                    border-radius: 0 10px 10px 0;
                }
            }
        }

        .bottom-nav {
            margin-top: 2rem;

            li {
                display: flex;
                align-items: center;
                cursor: pointer;
                color: rgba(34, 34, 96, 0.6);
            }
        }
    `;

    return (
        <NavStyled>
            <div className="user-icon">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Mike</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active' : ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    );
}
