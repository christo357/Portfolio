/* data.js */
const portfolioData = {
    // ------------------------------------------------------------------------
    // 1. HEADER & BIO
    // ------------------------------------------------------------------------
    name: "Christo Mathew",
    title: "Applied AI & Agent Engineer",
    bio: "Building autonomous agents that reason and act in dynamic environments. Bridging the gap between High-Level Planning (LLMs) and Low-Level Control (RL) to create resilient systems—from robotic manipulators to software navigators.",

    // Profile Photos
    heroPhoto: "images/profile.jpg",
    aboutPhoto: "images/profile.jpg",

    // Detailed About Section
    about: {
        text: "I am an engineer focused on the 'Body' of Artificial Intelligence. While the industry focuses on LLMs (the brain), I build the control stacks that allow AI to interact with the physical world. My expertise lies in designing stable Reinforcement Learning algorithms for continuous control tasks and engineering asynchronous pipelines for real-time robotic perception. I have a strong foundation in the mathematics of policy gradients (PPO/A2C) and the systems engineering required to deploy them.",
        education: "Master's in Computer Science - Rutgers University",
        experience: "Research Assistant @ Rutgers University | Focus: RL for Complex Reasoning"
    },

    // ------------------------------------------------------------------------
    // 2. SKILLS
    // ------------------------------------------------------------------------
    skills: [
        {
            category: "Robotics & Control",
            icon: "fas fa-robot",
            items: [
                { name: "MuJoCo", imgSrc: "icons/mujoco_icon.png", type: "tool" },
                { name: "Gymnasium", imgSrc: "https://farama.org/assets/images/gymnasium_black.svg", type: "tool" },
                { name: "Gymnasium-Robotics", imgSrc: "icons/gymnasium_robotics_icon.png", type: "tool" },
                { name: "PPO & A2C", type: "concept" },
                { name: "Reward Engineering", type: "concept" },
                { name: "Curriculum Learning", type: "concept" }
            ]
        },
        {
            category: "Computer Vision",
            icon: "fas fa-eye",
            items: [
                { name: "OpenCV", icon: "devicon-opencv-plain", type: "tool" },
                { name: "YOLOv11", type: "tool" },
                { name: "DeepSORT", type: "concept" },
                { name: "Domain Randomization", type: "concept" },
                { name: "Vision Transformers (ViT)", type: "concept" }
            ]
        },
        {
            category: "Deep Learning",
            icon: "fas fa-brain",
            items: [
                { name: "PyTorch", icon: "devicon-pytorch-original", type: "tool" },
                { name: "TensorFlow", icon: "devicon-tensorflow-original", type: "tool" },
                { name: "Transformers", type: "concept" },
                { name: "Hyperparameter Tuning", type: "concept" }
            ]
        },
        {
            category: "Engineering Stack",
            icon: "fas fa-cogs",
            items: [
                { name: "Linux", icon: "devicon-linux-plain", type: "tool" },
                { name: "Git", icon: "devicon-git-plain", type: "tool" },
                { name: "Weights & Biases", imgSrc: "icons/wandb_icon.png", type: "tool" },
                { name: "Hugging Face", imgSrc: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", type: "tool" },
                // CHANGED: "Parallel Computing" -> "Asynchronous Systems" (More accurate for your threading work)
                { name: "Asynchronous Systems", type: "concept" },
                { name: "Latency Optimization", type: "concept" },
                { name: "Multi-Threading", type: "concept" }
            ]
        },
        // {
        //     category: "Math & Theory",
        //     icon: "fas fa-square-root-alt",
        //     items: [
        //         { name: "MDPs", type: "concept" },
        //         { name: "Linear Algebra", type: "concept" },
        //         { name: "Probability Theory", type: "concept" },
        //         { name: "Monte-Carlo Methods", type: "concept" }
        //     ]
        // }
    ],

    // ------------------------------------------------------------------------
    // 3. SOCIALS & CONTACT
    // ------------------------------------------------------------------------
    socials: {
        github: "https://github.com/christo357",
        linkedin: "https://linkedin.com/in/christo-m7",
    },

    contact: {
        location: "Available for Remote Work (USA)",
        text: "I am actively looking for roles in Embodied AI, Robotics Simulation, and ML Engineering. Let's build agents that work."
    },

    // ------------------------------------------------------------------------
    // 4. PUBLICATIONS
    // ------------------------------------------------------------------------
    publications: [
        {
            title: "Toward a Metrology for Artificial Intelligence: Hidden-Rule Environments and Reinforcement Learning",
            authors: "Christo Mathew, Wentian Wang, Jacob Feldman, Lazaros K. Gallos, Paul B. Kantor, Vladimir Menkov, Hao Wang",
            venue: "arXiv [2509.06213]",
            year: "2025",
            arxivId: "2509.06213",
            arxivUrl: "https://arxiv.org/abs/2509.06213",
            description: "Investigated the impact of state representation on RL performance in the Game Of Hidden Rules (GOHR). Conducted a comparative analysis of Object-Centric vs. Feature-Centric architectures, demonstrating that object-level inductive biases significantly improve sample efficiency in latent-rule discovery.",
            tags: ["Reinforcement Learning", "Reasoning", "Paper"]
        },
    ],

    // ------------------------------------------------------------------------
    // 5. PROJECTS
    // ------------------------------------------------------------------------
    projects: [

        // --- THE HERO PROJECT (UPDATED) ---
        {
            title: "LLM-Driven Robotic Manipulation",
            sectionTitle: "Embodied AI & Robotics",
            // Added "Asynchronous Systems" and "State-Based Control"
            tags: ["Reinforcement Learning (TQC)", "MuJoCo", "Multi-Threading", "Asynchronous Systems", "State-Based Control", "Python"],
            // Using the 'Overall' video (Longer demo)
            videoUrl: "https://github.com/user-attachments/assets/e5560d35-05b3-489d-9a0a-fa090a45930e",
            description: "A hierarchical 'Brain-Body' control system for the Fetch robot. I engineered a multi-threaded asynchronous architecture to decouple slow LLM reasoning from the 60Hz physics loop, ensuring zero-latency motor control during complex planning phases.", featured: true, // Mark as featured if your template supports it
            links: [
                { text: "View Code", url: "https://github.com/christo357/LLM-Robotic-Arm" }, // Ensure this matches your actual repo name
            ]
        },

        // --- RESEARCH PROJECT ---
        {
            title: "Object-Centric A2C for Latent Reasoning",
            sectionTitle: "Research & Foundations",
            tags: ["Transformer-A2C", "Object-Centric Learning", "State Representation"],
            imageUrl: "images/gohr.png",
            description: "Featured on arXiv (2509.06213). Investigated failure modes of Actor-Critic methods in hidden-rule environments, demonstrating that object-level inductive biases significantly improve sample efficiency.",
            featured: true,
            links: [
                { text: "Read Paper", url: "https://arxiv.org/abs/2509.06213" }
            ]
        },

        // --- RL ENGINEERING PROJECT ---
        {
            title: "Continuous Control Policy Optimization",
            sectionTitle: "Embodied AI & Robotics",
            tags: ["PPO", "GAE", "VectorEnv", "MuJoCo"],
            videoUrl: "assets/ppo_reacher.mp4",
            description: "A high-throughput PPO agent for the Reacher-v2 task. Solved the 'sparse reward' problem using Generalized Advantage Estimation (GAE) and parallelized environments, improving sample efficiency by 400%.",
            featured: true,
            links: [
                { text: "View Architecture", url: "https://github.com/christo357/RL_experiments/blob/main/5_ppo/ppo_reacher.py" }
            ]
        },

        // --- VISION PROJECT ---
        {
            title: "Real-Time Human-Robot Interaction System",
            sectionTitle: "Computer Vision & Perception",
            tags: ["YOLOv11", "DeepSORT", "Latency Optimization", "PyTorch"],
            imageUrl: "images/treasure_finder.png",
            description: "An end-to-end perception pipeline integrating YOLOv11 and DeepSORT. Built a logic layer to gamify real-world video feeds and focused on real-time inference behavior and pipeline efficiency.",
            featured: true,
            links: [
                { text: "View Code", url: "https://github.com/christo357/Treasure-Finder/tree/main" }
            ]
        },

        {
            title: "Stabilization of Non-Linear Dynamics",
            sectionTitle: "Embodied AI & Robotics",
            tags: ["A2C", "Variance Reduction", "Entropy Regularization", "PyTorch"],
            videoUrl: "assets/ppo_inv_doublependulum.mp4",
            description: "Tackled 'catastrophic forgetting' in chaotic double-pendulum dynamics. A comparative analysis of synchronous vs. asynchronous policy gradients, tuning entropy regularization for robust convergence.",
            links: [
                { text: "View PPO Implementation", url: "https://github.com/christo357/RL_experiments/blob/main/5_ppo/ppo_invdoublependulum_parallel.py" },
                { text: "View A2C Implementation", url: "https://github.com/christo357/RL_experiments/blob/main/4_a2c_gae/a2c_invdoublependulum_optimized.py" }
            ]
        },

        {
            title: "N-Step Bootstrapping Analysis",
            sectionTitle: "Research & Foundations",
            tags: ["TD-Lambda", "Credit Assignment", "Algorithm Design"],
            videoUrl: "assets/nstep_a2c_balancing_invpendulum.mp4",
            description: "Investigated the bias-variance tradeoff in Temporal Difference learning. Empirically demonstrated how increasing the rollout horizon (N-Step) reduces bias in value estimation.",
            links: [
                { text: "View Code", url: "https://github.com/christo357/RL_experiments/blob/main/3_nstep_actorcritic/nstep_actorcritic_invertedpendulum.py" }
            ]
        },

        {
            title: "Vision Transformer (ViT) Robustness Analysis",
            sectionTitle: "Computer Vision & Perception",
            tags: ["Transformers", "Inductive Bias", "Model Robustness"],
            imageUrl: "images/shvit.png",
            description: "Quantifying the inductive bias of Single-Head Vision Transformers (SHViT). Conducted ablation studies across domain shifts to measure generalization capabilities against CNN baselines.",
            links: [
                { text: "View Analysis", url: "https://github.com/christo357/SHViT" }
            ]
        }
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
