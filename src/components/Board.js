// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import List from './List';
// import { loadLists } from '../actions/listsActions';




// function Board() {

//     const dispatch = useDispatch();

//     const lists = useSelector((state) => {
//         return state.lists;
//     });

//     useEffect(() => {

//         const getLists = async () => {

//             const res = await fetch('');
//             const newLists = await res.json(); // data
//             dispatch(loadLists(newLists));


//         };

//         getLists();

//     }, [])

//     return (
//         <>
//             {lists.map((list, index) => {
//                 //console.log(list);
//                 return (
//                     <List
//                         key={list.id}
//                         listID={list.id}
//                         title={list.title}
//                         cards={list.cards}
//                         index={index}
//                     />
//                 )
//             })}
//         </>
//     )
// };

// export default Board;