function getPostsByHashtag(hashtag) {
    return firebase.firestore().collection('posts')
        .where('hashtags', 'array-contains', hashtag)
        .get()
        .then(querySnapshot => {
            const posts = [];
            querySnapshot.forEach(doc => {
                posts.push(doc.data());
            });
            return posts;
        });
}

function myButtonClickHandler() {
    console.log("El botón fue presionado");´ }