let colors = [];
    document.querySelector('button').onclick = function() {
        let final = `#${colors.join("")}`;
        final += Math.random().toString(16).slice(2,8);
        document.querySelector('body').style.backgroundColor = final;

};