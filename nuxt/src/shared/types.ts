import type { IPost } from "../entities/post/post_types"

export type Categories = 'programming' | 'design' | 'video/audio' | 'texts' | 'marketing' | 'seo'
export type PostsByCategory = Partial<Record<Categories, IPost[]>>