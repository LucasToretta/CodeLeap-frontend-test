import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { CreatePostForm } from './components/CreatePostForm'
import { DeleteModal } from './components/DeleteModal'
import { EditModal } from './components/EditModal'
import { Header } from './components/Header'
import { PostCard } from './components/PostCard'
import { SignUpForm } from './components/SignUpForm'
import { createPost, deletePost, getPosts, updatePost } from './services/api'
import type { Post } from './types/post'

const Page = styled.div`
  min-height: 100vh;
  padding: 32px 16px;

  @media (max-width: 768px) {
    padding: 24px 12px;
  }
`

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
`

const Main = styled.main`
  padding: 24px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`

const Loading = styled.p`
  font-size: 16px;
`

function App() {
  const [username, setUsername] = useState<string>(
    localStorage.getItem('codeleap_username') || '',
  )
  const [usernameInput, setUsernameInput] = useState('')
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const [postToDelete, setPostToDelete] = useState<Post | null>(null)
  const [postToEdit, setPostToEdit] = useState<Post | null>(null)
  const [editTitle, setEditTitle] = useState('')
  const [editContent, setEditContent] = useState('')

  async function loadPosts() {
    try {
      setLoading(true)
      const data = await getPosts()
      setPosts(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (username) {
      loadPosts()
    }
  }, [username])

  const sortedPosts = useMemo(() => {
    return [...posts].sort(
      (a, b) =>
        new Date(b.created_datetime).getTime() -
        new Date(a.created_datetime).getTime(),
    )
  }, [posts])

  function handleEnter() {
    const trimmedUsername = usernameInput.trim()

    if (!trimmedUsername) return

    setUsername(trimmedUsername)
    localStorage.setItem('codeleap_username', trimmedUsername)
  }

  function handleLogout() {
    localStorage.removeItem('codeleap_username')
    setUsername('')
    setUsernameInput('')
  }

  async function handleCreatePost() {
    if (!title.trim() || !content.trim()) return

    try {
      await createPost({
        username,
        title: title.trim(),
        content: content.trim(),
      })

      setTitle('')
      setContent('')
      await loadPosts()
    } catch (error) {
      console.error(error)
    }
  }

  function handleOpenEditModal(post: Post) {
    setPostToEdit(post)
    setEditTitle(post.title)
    setEditContent(post.content)
  }

  function handleCloseEditModal() {
    setPostToEdit(null)
    setEditTitle('')
    setEditContent('')
  }

  async function handleSaveEdit() {
    if (!postToEdit || !editTitle.trim() || !editContent.trim()) return

    try {
      await updatePost(postToEdit.id, {
        title: editTitle.trim(),
        content: editContent.trim(),
      })

      handleCloseEditModal()
      await loadPosts()
    } catch (error) {
      console.error(error)
    }
  }

  async function handleDeletePost() {
    if (!postToDelete) return

    try {
      await deletePost(postToDelete.id)
      setPostToDelete(null)
      await loadPosts()
    } catch (error) {
      console.error(error)
    }
  }

  if (!username) {
    return (
      <SignUpForm
        username={usernameInput}
        onUsernameChange={setUsernameInput}
        onEnter={handleEnter}
      />
    )
  }

  return (
    <Page>
      <Container>
        <Header onLogout={handleLogout} />

        <Main>
          <CreatePostForm
            title={title}
            content={content}
            onTitleChange={setTitle}
            onContentChange={setContent}
            onCreate={handleCreatePost}
          />

          {loading ? (
            <Loading>Loading posts...</Loading>
          ) : (
            sortedPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                isOwner={post.username === username}
                onDelete={setPostToDelete}
                onEdit={handleOpenEditModal}
              />
            ))
          )}
        </Main>
      </Container>

      {postToDelete && (
        <DeleteModal
          onCancel={() => setPostToDelete(null)}
          onConfirm={handleDeletePost}
        />
      )}

      {postToEdit && (
        <EditModal
          title={editTitle}
          content={editContent}
          onTitleChange={setEditTitle}
          onContentChange={setEditContent}
          onCancel={handleCloseEditModal}
          onSave={handleSaveEdit}
        />
      )}
    </Page>
  )
}

export default App