/* data.js */
const portfolioData = {
    name: "Christo Mathew",
    title: "Applied ML & RL Engineer",
    bio: "Applied ML Engineer specializing in Deep Reinforcement Learning and Computer Vision. Dedicated to building intelligent agents that perceive, adapt, and learn in complex environments.",

    // Profile Photos
    // You can use separate photos for hero and about sections
    heroPhoto: "images/profile.jpg", // Photo for hero section
    aboutPhoto: "images/profile.jpg", // Photo for about section
    // Fallback: if heroPhoto or aboutPhoto are not set, this will be used
    // photo: "images/profile.jpg", // Legacy support - will be used if heroPhoto/aboutPhoto not set

    // Detailed About Section
    about: {
        text: "I'm a Machine Learning Engineer specializing in Deep Reinforcement Learning, with a passion for creating intelligent agents that can learn and adapt in complex environments. My journey in ML has taken me from understanding the fundamentals of supervised learning to exploring the exciting world of reinforcement learning, where agents learn through interaction and feedback.",
        education: "Master's in Computer Science - Rutgers University, New Brunswick",
        experience: "Research Assistant @ Rutgers University, New Brunswick "
    },

    // Skills Section
    skills: [
        {
            name: "Reinforcement Learning",
            icon: "fas fa-robot",
            description: "Deep RL, PPO, A2C, DQN, Gymnasium, MuJoCo, SB3"
        },
        {
            name: "Deep Learning & AI",
            icon: "fas fa-brain",
            description: "PyTorch, TensorFlow, Transformers, Neural Networks, LLMs"
        },
        {
            name: "Computer Vision",
            icon: "fas fa-eye",
            description: "Object Detection, Object Tracking, YOLO, OpenCV, DeepSORT, Vision Transformers"
        },
        {
            name: "Data Science & ML",
            icon: "fas fa-chart-line",
            description: "Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn, Data Visualization"
        },
        {
            name: "Tools & MLOps",
            icon: "fas fa-cogs",
            description: "Git, GitHub, WandB, CI/CD, Linux, Docker"
        }
    ],

    // Social Links
    socials: {
        github: "https://github.com/christo357",
        linkedin: "https://linkedin.com/in/christo-m7",
        // twitter: "https://twitter.com/yourusername" // optional
    },

    // Contact Information
    contact: {
        email: "christomathew2001@gmail.com", // Update with your actual email
        location: "Available for Remote Work",
        text: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!"
    },

    // Publications
    publications: [
        {
            title: "Toward a Metrology for Artificial Intelligence: Hidden-Rule Environments and Reinforcement Learning",
            authors: "Christo Mathew, Wentian Wang, Jacob Feldman, Lazaros K. Gallos, Paul B. Kantor, Vladimir Menkov, Hao Wang",
            venue: "arXiv preprint",
            year: "2025",
            arxivId: "2509.06213", // e.g., "2401.12345"
            arxivUrl: "https://arxiv.org/abs/2509.06213", // Full arXiv URL
            description: "Investigation of Reinforcement Learning in the Game Of Hidden Rules(GOHR) envrionment, \
            a complex puzzle in which an agent must infer and execute hidden rules to clear a board by placing game pieces into buckets. The RL algorithm Advantage A2C is used to solve the game.",
            tags: ["Machine Learning", "Reinforcement Learning", "Deep Learning"]
        }
        // Add more publications as needed
    ],

    // Projects
    projects: [
        {
            title: "Reacher-v2 - PPO",
            sectionTitle: "Reinforcement Learning", // Section this project belongs to
            tags: ["Reinforcement Learning", "MuJoCo", "PPO", "Continuous Control", "Parallel Envs"],
            videoUrl: "assets/ppo_reacher.mp4", // Leave empty to show a placeholder or "Work in Progress"
            description: "Implementation of Proximal Policy Optimization (PPO) solving the classic Reacher-v2 control task. Utilized parallel environments for faster data collection, and variance reduction. The agent successfully learns to reach the target through continuous policy optimization.",
            // featured: true, // Show on homepage
            links: [
                { text: "View Code", url: "https://github.com/christo357/RL_experiments/blob/main/5_ppo/ppo_reacher.py" },
                // { text: "WandB Report", url: "" }
            ]
        },


        {
            title: "Inverted Double Pendulum - PPO",
            sectionTitle: "Reinforcement Learning",
            tags: ["Reinforcement Learning", "MuJoCo", "PPO", "Parallel Envs", "PyTorch"],
            // Replace with the raw link to your video or a local path like 'assets/pendulum.mp4'
            // videoUrl: "https://user-images.githubusercontent.com/your-video-link.mp4", 
            videoUrl: "assets/ppo_inv_doublependulum.mp4",
            description: "Implementation of Proximal Policy Optimization (PPO) solving the classic Inverted Pendulum control task. Utilized parallel environments for faster data collection, and variance reduction. The agent successfully learns to balance the pendulum through continuous policy optimization.",
            featured: true, // Show on homepage
            links: [
                { text: "View Code", url: "https://github.com/christo357/RL_experiments/blob/main/5_ppo/ppo_invdoublependulum_parallel.py" },
                // { text: "WandB Report", url: "" }
            ]
        },

        {
            title: "Inverted Double Pendulum - Advantage A2C",
            sectionTitle: "Reinforcement Learning",
            tags: ["Reinforcement Learning", "MuJoCo", "A2C", "PyTorch", "Wandb"],
            // Replace with the raw link to your video or a local path like 'assets/pendulum.mp4'
            // videoUrl: "https://user-images.githubusercontent.com/your-video-link.mp4", 
            videoUrl: "assets/a2c_invdoublependulum.mp4",
            description: "Implementation of Advantage Actor-Critic (A2C) solving the classic Inverted Pendulum control task. Implemeted using both parallel and single environment for comparison.  The agent successfully learns to balance the pendulum through continuous policy optimization.",
            links: [
                { text: "View Code (Single Env)", url: "https://github.com/christo357/RL_experiments/blob/main/4_a2c_gae/a2c_invdoublependulum_optimized.py" },
                { text: "View Code (Parallel Env)", url: "https://github.com/christo357/RL_experiments/blob/main/4_a2c_gae/a2c_invdoublependulum_parallel.py" },
                // { text: "WandB Report", url: "" }
            ]
        },



        {
            title: "Inverted Pendulum - N-Step Actor-Critic",
            sectionTitle: "Reinforcement Learning",
            tags: ["Reinforcement Learning", "MuJoCo", "Actor-Critic", "PyTorch", "WandB"],
            // Replace with the raw link to your video or a local path like 'assets/pendulum.mp4'
            // videoUrl: "https://user-images.githubusercontent.com/your-video-link.mp4", 
            videoUrl: "assets/nstep_a2c_balancing_invpendulum.mp4",
            description: "Implementation of N-Step Actor-Critic (A2C) solving the classic Inverted Pendulum control task. Implemetned N-step returns to reduce variance and improve stability of the learning process.",
            links: [
                { text: "View Code", url: "https://github.com/christo357/RL_experiments/blob/main/3_nstep_actorcritic/nstep_actorcritic_invertedpendulum.py" },
                { text: "WandB Report", url: "https://api.wandb.ai/links/cm1788-rutgers-university/gzokza6i" }
            ]
        },

        {
            title: "CartPole - REINFORCE ",
            sectionTitle: "Reinforcement Learning",
            tags: ["Reinforcement Learning", "Reinforce", "PyTorch", "WandB"],
            // Replace with the raw link to your video or a local path like 'assets/pendulum.mp4'
            // videoUrl: "https://user-images.githubusercontent.com/your-video-link.mp4", 
            videoUrl: "assets/reinforce_cartpole.mp4",
            description: "Implementation of Reinforce solving the classic CartPole control task. ",
            links: [
                { text: "View Code", url: "https://github.com/christo357/inverted-pendulum-a2c" },
                { text: "WandB Report", url: "https://api.wandb.ai/links/cm1788-rutgers-university/99zgclmd" }
            ]
        },

        {
            title: "Treasure Hunt Game ",
            sectionTitle: "Computer Vision",
            tags: ["Object-Detection", "Object-Tracking", "OpenCV", "YOLOv11", "DeepSORT", "PyTorch",],
            // Use imageUrl when there's no video
            videoUrl: "",

            imageUrl: "images/treasure_finder.png", // Image to display when no video
            description: "A Treasure Hunt Game in which an object in frame is detected and randomly assigned as a treasure. And the person playing the game is tracked real-time. Clues regarding whether the person has reached the treasure or not is given using color indicators, duplicating the classic Hot/Cold game logic. ",
            featured: true, // Show on homepage
            links: [
                { text: "View Code", url: "https://github.com/christo357/Treasure-Finder/tree/main" },
            ]
        },

        {
            title: "Exploring the Generalization, Efficiency, and Inductive Bias of SHViT Across Visual Domains",
            sectionTitle: "Computer Vision",
            tags: ["Object-Detection", "Robustness Analysis", "SHViT", "Vision Transformers", "PyTorch", "Matplotlib", "Numpy"],
            // Replace with the raw link to your video or a local path like 'assets/pendulum.mp4'
            // videoUrl: "https://user-images.githubusercontent.com/your-video-link.mp4", 
            videoUrl: "",
            imageUrl: "images/shvit.png", // Fixed: lowercase 'i'
            description: "Research project exploring the generalization capabilities, efficiency, and inductive bias of SHViT (Single-Head Vision Transformer) across different visual domains.",
            links: [
                { text: "View Code", url: "https://github.com/christo357" }, // Update with actual link
                // { text: "WandB Report", url: "https://api.wandb.ai/links/cm1788-rutgers-university/99zgclmd" }
            ]
        },

        // {
        //     title: " ",
        //     sectionTitle: "",
        //     tags: ["PyTorch",],
        //     // Replace with the raw link to your video or a local path like 'assets/pendulum.mp4'
        //     // videoUrl: "https://user-images.githubusercontent.com/your-video-link.mp4", 
        //     videoUrl: "",
        //     description: "",
        //     // links: [
        //     //     { text: "View Code", url: "https://github.com/christo357/inverted-pendulum-a2c" },
        //     //     { text: "WandB Report", url: "https://api.wandb.ai/links/cm1788-rutgers-university/99zgclmd" }
        //     // ]
        // },

    ]
};
