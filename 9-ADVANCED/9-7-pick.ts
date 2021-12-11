{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    }
    
    type VideoMetaData = Pick<Video, 'id' | 'title'>

    function getVideo(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'https://..',
            data: 'byte-data...'
        }
    }

    function getVideoIdOrTitle(id: string): VideoMetaData { // id 와 title을 Pick 을 이용해서 가져온 후 리턴
        return {
            id,
            title: 'hi'
        }
    }
}