import { useState, useEffect} from "react";
import BlogList from "./BolgList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:7000/blogs')


    return ( 
        <div className="home">
            { error && <div> {error}</div>}
            { isPending && <div>Lodaing...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
     );
            }
            
export default Home;