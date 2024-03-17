import List from './components/list';
import Search from './components/search';


function App() {

    return (
        <div className='container p-3 d-flex flex-column align-items-center'>

            {/* Search Box Component: */}
            <Search />
            
            {/* List User and Info Component: */}
            <List />

        </div>
    );
}

export default App;

