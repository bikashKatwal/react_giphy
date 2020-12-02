import './App.css';
import Random from './components/Random_V1';
import RandomV2 from './components/Random_V2';
import Tag from './components/Tag_V1';
import TagV2 from './components/Tag_V2';

function App() {
	return (
		<div>
			<h1>Random GIF Application</h1>
			<div className="main-container">
				<RandomV2 />
				<TagV2 />
				{/* <Random />
				<Tag /> */}
			</div>
		</div>
	);
}

export default App;
