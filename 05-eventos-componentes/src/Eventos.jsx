function App() {
    function handleScroll(event) {
        console.log(event)
    }

    window.addEventListener('scroll', handleScroll)
    return (
        <div style={{ height: '200vh' }}>
            <button onClick={(event) => console.log(event.target.innerText)}>
                Clique
            </button>
        </div>
    )
}

export default App
