import React, {useState, useEffect} from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import db, {app} from './firebase'
import { collection, getFirestore, onSnapshot, orderBy } from 'firebase/firestore'

function Feed() {
    const [posts, setPosts] = useState([])
    const db = getFirestore(app)
    useEffect(() => {
        // collection(db, 'posts').onSnapshot(snapshot => (
        //     setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data() })))
        // ))

        onSnapshot(collection(db, 'posts'), orderBy('timestamp', 'desc'), (collection) =>{
            setPosts(collection.docs.map(doc => ({id: doc.id, data: doc.data()})))
        })
    }, [])

    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

           {posts.map(post => (
               <Post 
               key={post.data.id}
               profilePic={post.data.profilePic}
               message={post.data.message}
               timestamp={post.data.timestamp}
               username={post.data.username}
               image={post.data.image}
               />
           ))}
           
        </div>
    )
}

export default Feed
