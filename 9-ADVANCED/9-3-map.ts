type Video = {
    title: string;
    author: string;
};

type Optional<T> = {
    [P in keyof T]?: T[P] // for...in
}

type VideoOptional = Optional<Video>
const videoOp: VideoOptional = {
    title: 'helli',
    author: 'bsm',
}
// type VideoOptional = {
//     title?: string;
//     author?: string;
// };