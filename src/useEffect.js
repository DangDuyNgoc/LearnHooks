import{useEffect, useState} from 'react'

const tabs = ['posts', 'comments', 'albums'];

const lessons = [
    {
        id: 1,
        name: 'ReacJS là gì? Tại sao nên học ReactJS'
    }, 
    {
        id: 2,
        name: 'SPA/MPQ là gì?'
    },
    {
        id: 3,
        name: 'Arrow function'
    }
]

const Component = () => {

    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');

    const [goUp, setGoUp] = useState(false);

    const [width, setWidth] = useState(window.innerWidth);

    const [countDown, setCountDown] = useState(100);
    const [countUp, setCountUp] = useState(180);
    const [startDown, setStart] = useState(false);
    const [startUp, setStartUp] = useState(false);

    const [avatar, setAvatar] = useState();

    const [lessonId, setLessonId] = useState(1);

    // dùng useEffect vì logic này sẽ đươc thực thi sau, phần sử lý render vào DOM 
    // sẽ được thực thi trước. Set lại title chỉ là side effect, ưu tiên UI ng dùng

    // 1. update DOM
    useEffect(() =>{
        document.title = title;
    });

    // 2. Call API
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data))
    }, []);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((res) => res.json())
            .then((data) => setPosts(data))
    }, [type])

    // 3. Listen DOM Event
    useEffect(() => {

        const handlerScroll = () => {
            if(window.scrollY >= 1000) {
                setGoUp(true);
            } else {
                setGoUp(false);
            }

            // setGoUp(window.scrollY >= 1000) thay thế cho cả đoạn if else
        }

        window.addEventListener('scroll', handlerScroll);

        // cleanup function
        return () => {
            window.removeEventListener('scroll', handlerScroll);
        }
    }, []);

    useEffect(() => {

        const handleResize = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        // cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })

    // 4. Clear Timer
    useEffect(() => {
        // sử dụng dependecies để tránh component re-render liên tục, chỉ gọi lại setTimeout
        // mỗi khi countDown thay đổi
        if(startDown) {
            const timer = setTimeout(()=> {
                setCountDown(countDown -1)
            },1000)
            console.log(startDown);
        
            return () => clearTimeout(timer);
        }   
    }, [startDown, countDown])

    useEffect(() => {
        console.log(startUp);
        if(startUp) {
            const timerId = setInterval(()=> {
                setCountUp(prevState => prevState + 1)
            }, 1000)
    
            return () => clearInterval(timerId);
        }
    }, [startUp])

    const handleAvatar = (e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file);

        setAvatar(file)
    }

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar]);

    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail);
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])

    return ( 
        <div style={{padding: 20, marginBottom: 40}}>
            <span style={{color: 'red'}}>------Begin UseEffect-------</span>
            <br />
            <input value={title}
                placeholder='Enter Title' 
                onChange={(e => setTitle(e.target.value))}
            />

            <div>
            
            </div>
                <ul>
                    {
                    lessons.map(lesson => (
                        <li key={lesson.id}
                            style={{color: lessonId == lesson.id ? 'red' : '#333'}}
                            onClick={() => setLessonId(lesson.id)}
                        >
                            {lesson.name}
                        </li>
                    ))
                    }
                </ul>
                
            <input 
                type='file'
                onChange={handleAvatar}
            />
            {avatar && (
                <img src={avatar.preview} width='60%'/>
            )}

            <h1>{width} size sreen</h1>
              
            <div>
                <h2>{countDown}
                    <button
                        onClick={() => setStart(true)}
                    >
                        Start
                    </button>    

                    <button
                        onClick={() => setStart(false)}
                    >
                        Stop
                    </button> 
                    
                    <button
                        onClick={() => {
                            setCountDown(100)
                            setStart(false)
                        }}
                    >
                        Reset
                    </button>   
                </h2>
            </div>

             <div>
                <h2>{countUp}
                    <button
                        onClick={() => setStartUp(true)}
                    >
                        Start
                    </button>    

                    <button
                        onClick={() => setStartUp(false)}
                    >
                        Stop
                    </button> 
                    
                    <button
                        onClick={() => {
                            setCountUp(180)
                            setStartUp(false)
                        }}
                    >
                        Reset
                    </button>   
                </h2>
            </div>

            <div>
                {
                    tabs.map(tab => (
                        <button 
                            key={tab}
                            onClick={() => setType(tab)}
                            style={tab === type ? {color: '#fff', background: '#c5c5c5'} : {}}
                        >
                            {tab}
                        </button>
                    ))
                }
            </div>

            <ul>
            {
                posts.map((post) => (
                    <li key={post.id}>
                        {post.title || post.name}
                    </li>
                ))
            }
            </ul>

            {goUp && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                >
                    Go Up
                </button>)
            }
            <span style={{color: 'red'}}>------End UseEffect-------</span>
        </div>
    );
}
 
export default Component;