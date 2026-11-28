const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Back-End Development', className: 'backend' }
};

function timeAgo(timestamp) {
  const now = new Date();
  const past = new Date(timestamp);
  const diffMs = now - past;
  const diffMinutes = Math.floor(diffMs / (1000 * 60));

  if (diffMinutes < 60) {
    return `${diffMinutes}m ago`;
  }

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) {
    return `${diffHours}h ago`;
  }

  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d ago`;
}

function viewCount(views) {
  if (views >= 1000) {
    return `${Math.floor(views / 1000)}k`;
  }
  return views;
}

function forumCategory(id) {
  const selected = Object.prototype.hasOwnProperty.call(allCategories, id)
    ? allCategories[id]
    : { category: 'General', className: 'general' };

  const href = `${forumCategoryUrl}${selected.className}/${id}`;
  return `<a class="category ${selected.className}" href="${href}">${selected.category}</a>`;
}

function avatars(posters, users) {
  return posters
    .map((poster) => {
      const user = users.find((u) => u.id === poster.user_id);
      if (!user) return '';

      const src = user.avatar_template.startsWith('/')
        ? `${avatarUrl}${user.avatar_template.replace('{size}', '30')}`
        : user.avatar_template.replace('{size}', '30');

      return `<img src="${src}" alt="${user.name}" />`;
    })
    .join('');
}

function showLatestPosts(data) {
  const { users, topic_list } = data;
  const topics = topic_list.topics;
  const postsContainer = document.getElementById('posts-container');

  postsContainer.innerHTML = topics
    .map((topic) => {
      const {
        id,
        title,
        views,
        posts_count,
        slug,
        posters,
        category_id,
        bumped_at
      } = topic;

      const topicHref = `${forumTopicUrl}${slug}/${id}`;
      const categoryLink = forumCategory(category_id);
      const posterAvatars = avatars(posters, users);
      const replies = posts_count - 1;
      const formattedViews = viewCount(views);
      const activity = timeAgo(bumped_at);

      return `<tr><td><a class="post-title" href="${topicHref}">${title}</a>${categoryLink}</td><td><div class="avatar-container">${posterAvatars}</div></td><td>${replies}</td><td>${formattedViews}</td><td>${activity}</td></tr>`;
    })
    .join('');
}

async function fetchData() {
  try {
    const response = await fetch(forumLatest);
    const data = await response.json();
    showLatestPosts(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
