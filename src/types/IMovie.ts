import { IUserData } from "./IUserData";
import { ICatalog } from "./ICatalog";
import { IOption } from "./IOption";
import { IPart } from "./IPart";

interface IContent {
    mini_description: string;
    seo_description: string;
    seo_keywords: string;
    seo_title: string;
    slogan: string;
    text: string;
    theme: string;
    title: string;
}

export interface IMovie {
    badge: null;
    catalogs: ICatalog[];
    content: IContent;
    customer_group: number;
    film_base_url: string;
    film_path: string;
    hours: number;
    id: number;
    img_base_url: string;
    img_path: string;
    key: string;
    link: string;
    main_catalog: null;
    manager_id: number;
    minutes: number;
    options: IOption[];
    other_data_1: null;
    other_data_2: null;
    other_data_3: null;
    other_data_4: null;
    other_data_5: null;
    parts: IPart[];
    preview_base_url: string;
    preview_path: string;
    rating: string;
    slug: string;
    sort: number;
    stat_frame: string;
    stat_url: string;
    stream_film_link: string;
    stream_trailer_link: string;
    trailer_base_url: string;
    trailer_path: string;
    type: number;
    userdata: IUserData;
    visible: number;
}