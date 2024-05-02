document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll("aside a");
    let lastScrollTop = 0;

    function getHeaderLevel(headerId) {
        const header = document.getElementById(headerId);
        if (header) {
            const tagName = header.tagName.toLowerCase();
            return parseInt(tagName.charAt(1));
        }
        return -1;
    }

    function applyMenuOffsets() {
        const headerLevels = {};
        let minLevel = Infinity;

        menuLinks.forEach(link => {
            const targetId = link.getAttribute("href").substring(1);
            const headerLevel = getHeaderLevel(targetId);
            if (headerLevel > 0) {
                if (!headerLevels.hasOwnProperty(headerLevel)) {
                    headerLevels[headerLevel] = 0;
                }
                headerLevels[headerLevel]++;
                minLevel = Math.min(minLevel, headerLevel);
            }
        });

        let offset = 0;
        for (let i = minLevel; i <= 6; i++) {
            if (headerLevels[i] !== undefined) {
                menuLinks.forEach(link => {
                    const targetId = link.getAttribute("href").substring(1);
                    const headerLevel = getHeaderLevel(targetId);
                    if (headerLevel === i) {
                        link.style.marginLeft = offset + "px";
                    }
                });
                offset += 20;
            }
        }
    }

    applyMenuOffsets();

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function highlightMenuLink() {
        let st = window.scrollY || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            // Scroll down
            let newActiveLink = null;
            menuLinks.forEach(link => {
                const targetId = link.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement && isElementInViewport(targetElement)) {
                    newActiveLink = link;
                }
            });

            if (newActiveLink) {
                if (!newActiveLink.classList.contains("active")) {
                    menuLinks.forEach(link => {
                        link.classList.remove("active");
                    });
                    newActiveLink.classList.add("active");
                }
            }
        } else {
            // Scroll up
            let newActiveIndex = null;
            menuLinks.forEach((link, index) => {
                const targetId = link.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement && isElementInViewport(targetElement)) {
                    newActiveIndex = index;
                }
            });

            menuLinks.forEach(link => {
                link.classList.remove("active");
            });

            if (newActiveIndex !== null) {
                menuLinks[newActiveIndex].classList.add("active");
                lastActiveIndex = newActiveIndex;
            } else {
                if (lastActiveIndex > 0) {
                    menuLinks[lastActiveIndex - 1].classList.add("active");
                }
            }
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }


    window.addEventListener("scroll", highlightMenuLink);
});
