import classes from './BlogEntryList.module.css';
import BlogEntryItem from './BlogEntryItem';


function BlogEntryList(props) {
    return (
        <ul className={classes.list}>
            {props.blogentries.map(blogentry => 
            <BlogEntryItem 
            key={blogentry.id} 
            id={blogentry.id} 
            image={blogentry.image}
            title={blogentry.title}
            description={blogentry.description}
            />)}
        </ul>
    );

}

export default BlogEntryList;