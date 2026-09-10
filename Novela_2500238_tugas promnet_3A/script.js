// Script sederhana untuk interaksi
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn-highlight");
    const list = document.getElementById("list-belajar");

    btn.addEventListener("click", () => {
        // toggle highlight pada list
        list.classList.toggle("highlight");

        if (list.classList.contains("highlight")) {
            alert("Daftar pelajaran sedang di-highlight!");
        } else {
            alert("Highlight dihapus.");
        }
    });
});
