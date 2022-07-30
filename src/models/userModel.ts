declare module namespace {
  export interface MediaEmbed {}

  export interface SecureMediaEmbed {}

  export interface Gildings {
    gid_1: number;
  }

  export interface Source {
    url: string;
    width: number;
    height: number;
  }

  export interface Resolution {
    url: string;
    width: number;
    height: number;
  }

  export interface Variants {}

  export interface Image {
    source: Source;
    resolutions: Resolution[];
    variants: Variants;
    id: string;
  }

  export interface Preview {
    images: Image[];
    enabled: boolean;
  }

  export interface ResizedIcon {
    url: string;
    width: number;
    height: number;
  }

  export interface ResizedStaticIcon {
    url: string;
    width: number;
    height: number;
  }

  export interface AllAwarding {
    giver_coin_reward?: any;
    subreddit_id?: any;
    is_new: boolean;
    days_of_drip_extension?: any;
    coin_price: number;
    id: string;
    penny_donate?: any;
    award_sub_type: string;
    coin_reward: number;
    icon_url: string;
    days_of_premium?: any;
    tiers_by_required_awardings?: any;
    resized_icons: ResizedIcon[];
    icon_width: number;
    static_icon_width: number;
    start_date?: any;
    is_enabled: boolean;
    awardings_required_to_grant_benefits?: any;
    description: string;
    end_date?: any;
    sticky_duration_seconds?: any;
    subreddit_coin_reward: number;
    count: number;
    static_icon_height: number;
    name: string;
    resized_static_icons: ResizedStaticIcon[];
    icon_format?: any;
    icon_height: number;
    penny_price?: any;
    award_type: string;
    static_icon_url: string;
  }

  export interface SrDetail {
    default_set: boolean;
    banner_img: string;
    allowed_media_in_comments: string[];
    user_is_banned?: any;
    free_form_reports: boolean;
    community_icon: string;
    show_media: boolean;
    description: string;
    user_is_muted?: any;
    display_name: string;
    header_img: string;
    title: string;
    previous_names: any[];
    user_is_moderator?: any;
    over_18: boolean;
    icon_size?: any;
    primary_color: string;
    icon_img: string;
    icon_color: string;
    is_chat_post_feature_enabled: boolean;
    submit_link_label: string;
    header_size: number[];
    restrict_posting: boolean;
    restrict_commenting: boolean;
    subscribers: number;
    submit_text_label: string;
    link_flair_position: string;
    display_name_prefixed: string;
    key_color: string;
    name: string;
    created: number;
    url: string;
    quarantine: boolean;
    created_utc: number;
    banner_size?: any;
    allow_chat_post_creation: boolean;
    user_is_contributor?: any;
    accept_followers: boolean;
    public_description: string;
    link_flair_enabled: boolean;
    disable_contributor_requests: boolean;
    subreddit_type: string;
    user_is_subscriber?: any;
  }

  export interface RootObject {
    approved_at_utc?: any;
    subreddit: string;
    selftext: string;
    author_fullname: string;
    saved: boolean;
    mod_reason_title?: any;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: any[];
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class?: any;
    downs: number;
    thumbnail_height: number;
    top_awarded_type?: any;
    hide_score: boolean;
    name: string;
    quarantine: boolean;
    link_flair_text_color: string;
    upvote_ratio: number;
    author_flair_background_color?: any;
    ups: number;
    total_awards_received: number;
    media_embed: MediaEmbed;
    thumbnail_width: number;
    author_flair_template_id?: any;
    is_original_content: boolean;
    user_reports: any[];
    secure_media?: any;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category?: any;
    secure_media_embed: SecureMediaEmbed;
    link_flair_text?: any;
    can_mod_post: boolean;
    score: number;
    approved_by?: any;
    is_created_from_ads_ui: boolean;
    author_premium: boolean;
    thumbnail: string;
    edited: boolean;
    author_flair_css_class?: any;
    author_flair_richtext: any[];
    gildings: Gildings;
    post_hint: string;
    content_categories?: any;
    is_self: boolean;
    subreddit_type: string;
    created: number;
    link_flair_type: string;
    wls: number;
    removed_by_category?: any;
    banned_by?: any;
    author_flair_type: string;
    domain: string;
    allow_live_comments: boolean;
    selftext_html?: any;
    likes?: any;
    suggested_sort?: any;
    banned_at_utc?: any;
    url_overridden_by_dest: string;
    view_count?: any;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    preview: Preview;
    all_awardings: AllAwarding[];
    awarders: any[];
    media_only: boolean;
    sr_detail: SrDetail;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    author_flair_text?: any;
    treatment_tags: any[];
    visited: boolean;
    removed_by?: any;
    mod_note?: any;
    distinguished?: any;
    subreddit_id: string;
    author_is_blocked: boolean;
    mod_reason_by?: any;
    num_reports?: any;
    removal_reason?: any;
    link_flair_background_color: string;
    id: string;
    is_robot_indexable: boolean;
    report_reasons?: any;
    author: string;
    discussion_type?: any;
    num_comments: number;
    send_replies: boolean;
    whitelist_status: string;
    contest_mode: boolean;
    mod_reports: any[];
    author_patreon_flair: boolean;
    author_flair_text_color?: any;
    permalink: string;
    parent_whitelist_status: string;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    created_utc: number;
    num_crossposts: number;
    media?: any;
    is_video: boolean;
  }
}
