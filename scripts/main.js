document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.nav-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Xóa lớp active khỏi tất cả các button
            buttons.forEach(btn => btn.classList.remove('active'));
            // Thêm lớp active vào button được nhấn
            button.classList.add('active');
        });
    });
});
