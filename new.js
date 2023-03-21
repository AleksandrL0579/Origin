
const newP = (post, ad = Date()) => ({
    ...post,
    ad,
});

const first = {
    id: 1,
    author: 'Sasha',
};


function a() {
    console.log('Sasha')
}
console.log('Start')
setTimeout(a, 2000)
