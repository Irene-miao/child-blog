import { useHistory } from 'react-router-dom';
import NewBlogEntryForm from '../components/blogentry/NewBlogEntryForm';

function AddBlogPage() {
    const history = useHistory();

    function addBlogEntryHandler(blogentryData) {
        fetch('https://childblogapp-default-rtdb.asia-southeast1.firebasedatabase.app/blogentries.json',
        {
            method: 'POST',
            body: JSON.stringify(blogentryData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            history.replace('/');
        });
    }


    return (
        <section>
            <h1>Add Blog Entry</h1>
            <NewBlogEntryForm onAddBlogentry={addBlogEntryHandler}/>
        </section>
    );

}

export default AddBlogPage;