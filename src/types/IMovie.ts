interface IMovieOption {
    filter_description: null;
    filter_id: number;
    filter_name: string;
    filter_slug: string;
    filter_sort: number;
    filter_visible: number;
    option_description: null;
    option_id: string;
    option_slug: string;
    option_sort: number;
    option_value: string;
    option_visible: number;
}

export interface IMovie {
    badge: null;
    content: {
        mini_description: null;
        slogan: string;
        text: string;
        theme: string;
        title: string;
    }
    hours: number;
    id: number;
    img_base_url: string;
    img_path: string;
    link: null;
    main_catalog: null;
    minutes: number;
    // Временно
    options: IMovieOption[];
    other_data_1: null;
    other_data_2: null;
    other_data_3: null;
    other_data_4: null;
    other_data_5: null;
    rating: string;
    slug: string;
    sort: number;
    type: number;
    visible: number;
}