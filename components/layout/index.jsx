import React,{useEffect} from "react";

/**
 * layout中的数据获取使用useEffect或者swr
 * 因为layout不是页面 所以不要使用getStaticProps  getServerSideProps
 * @param {*} param0 
 * @returns 
 */
function Layout({ children }) {
    useEffect(()=>{
        // fetch() 获取数据
    },[])
    return (
        <div>
            <main>layout</main>
            {children}
        </div>
    );
}

export default Layout;
