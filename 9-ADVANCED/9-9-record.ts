type PageInfo = {
    title: string;
}

type Page = 'home' | 'about' | 'contact';

const nav: Record<Page, PageInfo> = { // Record를 사용하면 위에서 정의한 Type을 그대로 가져올 수 있다.
    home: {title: 'home'},
    about: {title: 'about'},
    contact: {title: 'contact'},
}