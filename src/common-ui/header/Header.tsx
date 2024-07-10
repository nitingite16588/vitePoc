import style from "./header.module.css"

const Header = ({ children }) => {
    return <>
        <header className={style.header}>
            <div>Logo</div>
            <div>
                {children}

            </div>
            <div>userMenu</div>
        </header>
    </>
};

export default Header;
