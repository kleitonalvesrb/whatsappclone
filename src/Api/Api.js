import firebase from "firebase";
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';
import NewChat from "../components/NewChat/NewChat";

import firebaseConfig from "../firebase/firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    fbPopup: async () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        let result = await firebaseApp.auth().signInWithPopup(provider);
        return result;
    },
    addUser: async (u) => {
        await db.collection('users').doc(u.id).set({
            name: u.name,
            avatar: u.avatar
        }, { merge: true });
    },
    getContactList: async (userId) => {
        let list = [];
        let resultados = await db.collection('users').get();
        resultados.forEach(result => {
            let data = result.data();
            if (result.id !== userId) {
                list.push({
                    id: result.id,
                    name: data.name,
                    avatar: data.avatar
                });
            }
        });
        return list;
    },
    addNewChat: async (user, user2) => {
        let newChat = await db.collection('chats').add({
            messages: [],
            users: [user.id, user2.id]
        });

        //   console.log(newChat.id);

        //usuario 1
        db.collection('users').doc(user.id).update({
            chats: firebase.firestore.FieldValue.arrayUnion({
                chatId: newChat.id,
                title: user2.name,
                image: user2.avatar,
                with: user2.id
            })
        });

        //usuario 2
        db.collection('users').doc(user2.id).update({
            chats: firebase.firestore.FieldValue.arrayUnion({
                chatId: newChat.id,
                title: user.name,
                image: user.avatar,
                with: user.id
            })
        })
    },
    onChatList: (userId, setChatList) => {
        return db.collection('users').doc(userId).onSnapshot((doc) => {
            if (doc.exists) {
                let data = doc.data();
                if (data.chats) {
                    let chats = [...data.chats];
                    chats.sort((a, b) => {
                        if (a.lastMessegeDate === undefined) {
                            return -1;
                        }
                        if (a.lastMessegeDate.seconds < b.lastMessegeDate.seconds) {
                            return 1;
                        } else {
                            return -1;
                        }
                    });
                    setChatList(data.chats)
                }
            }
        })
    },
    onChatContet: (chatId, setList, setUsers) => {
        return db.collection('chats').doc(chatId).onSnapshot((doc) => {
            if (doc.exists) {
                let data = doc.data();
                setList(data.messages);
                setUsers(data.users)
            }
        })
    },
    sendMessage: async (chatData, userId, type, body, users) => {
        db.collection('chats').doc(chatData.chatId).update({
            messages: firebase.firestore.FieldValue.arrayUnion({
                type: type,
                author: userId,
                body: body,
                date: new Date()
            })
        });

        for (let i in users) {
            let u = await db.collection('users').doc(users[i]).get();
            let uData = u.data();
            if (uData.chats) {
                let chats = [...uData.chats];
                for (let e in chats) {
                    if (chats[e].chatId == chatData.chatId) {
                        chats[e].lastMessage = body;
                        chats[e].lastMessegeDate = new Date()

                    }
                }

                await db.collection('users').doc(users[i]).update({
                    chats: chats
                })
            }
        }

    }
};