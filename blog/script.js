document.addEventListener('DOMContentLoaded', () => {
    const posts = [
        {
            title: 'Post 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet ante ligula. Integer vitae orci nec magna fermentum tristique.',
            link: 'post1.html'
        },
        {
            title: 'Post 2',
            content: 'Quisque venenatis leo purus, nec aliquam sem iaculis sit amet. Proin vel imperdiet orci. Nullam cursus dui ut sapien tincidunt, ut dictum lorem placerat.',
            link: 'post2.html'
        }
        // Add more posts as needed
    ];

    const postList = document.getElementById('post-list');

    posts.forEach(post => {
        const li = document.createElement('li');
        
        const title = document.createElement('h2');
        title.textContent = post.title;
        li.appendChild(title);

        const preview = document.createElement('p');
        preview.textContent = post.content;
        preview.className = 'post-preview';
        li.appendChild(preview);

        const readMoreButton = document.createElement('button');
        readMoreButton.textContent = 'Read more';
        readMoreButton.onclick = () => window.location.href = post.link;
        li.appendChild(readMoreButton);

        postList.appendChild(li);
    });

    document.querySelectorAll('h2').forEach(h2 => {
        h2.addEventListener('click', function() {
            const preview = this.nextElementSibling;
            preview.classList.toggle('expanded');
            if (preview.classList.contains('expanded')) {
                preview.style.maxHeight = 'none';
                preview.style.overflow = 'visible';
            } else {
                preview.style.maxHeight = '4.5em';
                preview.style.overflow = 'hidden';
            }
        });
    });
});
