class WelcomeText extends React.Component {
    render() {
        let name = "World";
        return (
            <h1>Hello {name}</h1>
        )
    }
}

class NavigationBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <WelcomeText /> 
                <h1>Products</h1>
                <h1>About Us</h1>
                <input type="text" />
                <button>Search</button>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <Gallery />
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
)