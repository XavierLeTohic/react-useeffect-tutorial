


// modern
const component = () => {
    const [data, setData] = useState(null)

    useEffect(async () => {
        const req = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await req.json()
        setData(data)

        return () => {
            console.log('unmount')
        }
    }, [])

    return (
        <div>
            {isLoading && <LoadingSpinner />}
            <h1>{data.title}</h1>
        </div>
    )
}




