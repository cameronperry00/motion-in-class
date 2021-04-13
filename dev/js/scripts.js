import { gsap } from "gsap";

gsap.to("#red-circle", { duration: 4, scale: 4, alpha: 0, delay: 2, repeat: -1, yoyo: true });

gsap.from("#blue-square", { duration: 4, x:"+=200" });
