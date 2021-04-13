import { gsap } from "gsap";

gsap.to("#red-circle", { duration: 4, x: 200 });

gsap.from("#blue-square", { duration: 4, x:"+=200" });
