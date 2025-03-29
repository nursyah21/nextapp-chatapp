# starter pack next js chatapp

## tech stack
- nextjs (frontend / backend)
- shadcn (styling)
- drizzle (orm)
- zustand (state management)
- swr (data fetching)
- zod (validation)
- jest (testing)

## third party services
- vercel (deployment)
- kindle (auth)
- neon (database)
- upstash (realtime db)
- uploadthing (file storage)

## prototype / flow application

### feature
1. sign in google / email
2. logout
3. edit profile (username :unique, name, avatar)
4. add user
5. create channel (channel name :unique, picture channel)
6. search user / channel
7. send message
8. edit message (last message)
9. delete message
10. send file (max 2mb)
11. detect file if picure/video/audio
12. detect seen message
13. notification if new messages

### route frontend / backend
- frontend
    - / 
        - page.tsx
            - login with google
            - login with email
    - /(auth)
        - page.tsx
            - logout
            - chat
            - contact person
            - group
        - /chat
            - page.tsx
                - show list chat
        - /chat/[id]
            - page.tsx
                - send message (text / file)
                - delete message
                - edit message (only last message)
                - see is seen or not
        - /contact
            - page.tsx
                - show list contact
                - add new contact
                - search contact
        - /group
            - page.tsx
                - show list group
                - add new group
                - create new group
                - search group
        - /group/[id]
            - page.tsx
                - send message (text / file)
                - delete message
                - edit message (only last message)
                - see is seen or not
- backend (/api) 
    - /auth/[kindeAuth]
    - /profile
        - create profile
        - edit profile
    - /chat
        - send message
        - delete message
        - edit message
    - /contact
        - add contact
        - search contact
    - /group
        - add group
        - search group
        - create group

### database
- users
    - id (string)
    - auth_id (string)
    - username (string)
    - name (string)
    - avatar_url (string)
    - created_at (timestamp)
    - updated_at (timestamp)
- chats
    - id (string)
    - is_group (boolean)
    - group_picture (string)
    - name_group (string)
    - created_at (timestamp)
    - updated_at (timestamp)
- chat_members
    - id (string)
    - chat_id (string)
    - user_id (string)
    - created_at (timestamp)
    - updated_at (timestamp)
- messages
    - id (string)
    - chat_id (string)
    - sender_id (string)
    - content (string)
    - file_url (string)
    - message_type (string)
    - is_edited (boolean)
    - created_at (timestamp)
    - updated_at (timestamp)
- message_status
    - id (string)
    - message_id (string)
    - user_id (string)
    - is_seen (string)
    - seen_at (timestamp)
    - created_at (timestamp)
    - updated_at (timestamp)
