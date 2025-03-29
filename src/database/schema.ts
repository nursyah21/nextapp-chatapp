import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { createSelectSchema} from 'drizzle-zod'
import { z } from "zod";

export const users = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    authId: text("auth_id").notNull(),
    username: text("username").notNull(),
    name: text("name").notNull(),
    avatarUrl: text("avatar_url"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const usersSelectSchema = createSelectSchema(users);
export type UsersSelectType = z.infer<typeof usersSelectSchema>;

export const chats = pgTable("chats", {
    id: uuid("id").primaryKey().defaultRandom(),
    isGroup: boolean("is_group").notNull(),
    groupPicture: text("group_picture"),
    nameGroup: text("name_group"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const chatsSelectSchema = createSelectSchema(chats);
export type ChatsSelectType = z.infer<typeof chatsSelectSchema>;


export const chatMembers = pgTable("chat_members", {
    id: uuid("id").primaryKey().defaultRandom(),
    chatId: uuid("chat_id").references(() => chats.id).notNull(),
    userId: uuid("user_id").references(() => users.id).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const chatMembersSelectSchema = createSelectSchema(chatMembers);
export type ChatMembersSelectType = z.infer<typeof chatMembersSelectSchema>;


export const messages = pgTable("messages", {
    id: uuid("id").primaryKey().defaultRandom(),
    chatId: uuid("chat_id").references(() => chats.id).notNull(),
    senderId: uuid("sender_id").references(() => users.id).notNull(),
    content: text("content"),
    fileUrl: text("file_url"),
    messageType: text("message_type").notNull(),
    isEdited: boolean("is_edited").default(false).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const messagesSelectSchema = createSelectSchema(messages);
export type MessagesSelectType = z.infer<typeof usersSelectSchema>;


export const messageStatus = pgTable("message_status", {
    id: uuid("id").primaryKey().defaultRandom(),
    messageId: uuid("message_id").references(() => messages.id).notNull(),
    userId: uuid("user_id").references(() => users.id).notNull(),
    isSeen: boolean("is_seen").default(false).notNull(),
    seenAt: timestamp("seen_at"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const messageStatussSelectSchema = createSelectSchema(messageStatus);
export type MessageStatusSelectType = z.infer<typeof messageStatussSelectSchema>;

