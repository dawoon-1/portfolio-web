// --- Project Data ---
const projects = [
    {
        id: 1,
        title: "천원의 아침밥 정보 제공 시스템",
        description: "대학생들이 교내 천원의 아침밥 운영 정보와 식단을 쉽게 확인할 수 있도록 제작한 모바일 애플리케이션입니다. 매일 아침 메뉴를 확인하고 운영 시간 및 공지사항을 실시간으로 파악할 수 있어 학생들의 복지 접근성을 높였습니다.",
        tech: ["Java", "Android Studio", "Room Database"],
        role: "UI 설계 및 데이터 관리 기능 구현",
        features: ["실시간 식단 조회", "운영시간 및 위치 안내", "공지사항 푸시 알림", "관심 메뉴 즐겨찾기"],
        learned: "사용자 중심의 UI/UX 설계의 중요성을 깨달았으며, 로컬 데이터베이스(Room)를 활용한 효율적인 데이터 관리 기법을 익혔습니다.",
        img: "https://via.placeholder.com/600x400?text=Breakfast+System+Detail"
    },
    {
        id: 2,
        title: "스마트 홈 오토메이션 시스템",
        description: "침입 감지 및 원격 모니터링 기능을 제공하는 IoT 기반 스마트 보안 시스템입니다. ESP32-CAM과 다양한 센서를 활용하여 집안의 상태를 실시간으로 감시하고, 이상 징후 발생 시 사용자에게 즉각 알림을 보냅니다.",
        tech: ["Arduino", "ESP32-CAM", "Blynk"],
        role: "하드웨어 설계, 센서 연동 및 카메라 스트리밍 구현",
        features: ["PIR 센서를 통한 침입 감지", "침입 발생 시 사진 촬영 및 클라우드 전송", "Blynk 앱을 통한 원격 제어 및 모니터링", "실시간 주변 환경 데이터(온습도) 측정"],
        learned: "하드웨어와 소프트웨어 간의 통신 프로세스를 깊이 있게 이해하게 되었으며, 실시간 시스템에서의 데이터 신뢰성 확보 방법을 배웠습니다.",
        img: "https://via.placeholder.com/600x400?text=Smart+Home+Detail"
    },
    {
        id: 3,
        title: "TripFlow",
        description: "사용자의 여행 계획을 효율적으로 관리하고 최적의 경로를 탐색할 수 있는 여행 일정 관리 애플리케이션입니다. 복잡한 여행 일정을 날짜별, 장소별로 한눈에 정리할 수 있도록 도와줍니다.",
        tech: ["Java", "Android Studio", "Room Database", "Naver Map API"],
        role: "프로젝트 총괄 기획, UI/UX 설계, 지도 API 연동",
        features: ["네이버 지도 기반 장소 검색 및 마커 표시", "드래그 앤 드롭을 이용한 일정 순서 변경", "여행 경비 자동 계산", "오프라인 모드 지원 (Room DB 활용)"],
        learned: "외부 API(지도) 연동 기술을 습득하였으며, 대규모 사용자 데이터를 처리하기 위한 데이터 구조 설계 능력을 향상시켰습니다.",
        img: "https://via.placeholder.com/600x400?text=TripFlow+Detail"
    },
    {
        id: 4,
        title: "AI 집중도 분석 코치",
        description: "Computer Vision 기술을 활용하여 사용자의 학습 태도를 분석하고 집중도를 수치화하는 인공지능 시스템입니다. 웹캠을 통해 사용자의 자세와 행동을 분석하여 졸음이나 딴짓을 감지하고 경고를 줍니다.",
        tech: ["Python", "YOLOv8", "OpenCV", "MediaPipe"],
        role: "AI 모델 연동 및 집중도 분석 알고리즘 구현",
        features: ["YOLOv8 기반 객체 탐지 (스마트폰 등)", "MediaPipe를 이용한 안구 추적 및 눈 감김 감지", "실시간 집중도 스코어링 대시보드", "학습 리포트 생성"],
        learned: "최신 AI 모델을 실무 프로젝트에 적용하는 경험을 쌓았으며, 영상 처리 성능 최적화의 중요성을 배웠습니다.",
        img: "https://via.placeholder.com/600x400?text=AI+Coach+Detail"
    }
];

// --- Sticky Header ---
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);

    // Back to top button visibility
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 500) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }

    // Active Nav Link
    updateActiveNavLink();
});

// --- Dark Mode Toggle ---
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const icon = darkModeToggle.querySelector('i');

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Check Local Storage for Theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
}

// --- Mobile Menu ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// --- Scroll Reveal ---
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // If it's a progress bar, animate it
            const progressBar = entry.target.querySelector('.progress');
            if (progressBar) {
                const width = progressBar.style.width;
                progressBar.style.width = '0';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 100);
            }
        }
    });
}, { threshold: 0.1 });

reveals.forEach(reveal => revealObserver.observe(reveal));

// --- Project Filtering ---
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                setTimeout(() => card.style.opacity = '1', 10);
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 300);
            }
        });
    });
});

// --- Modal Logic ---
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

function openModal(id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;

    modalBody.innerHTML = `
        <div class="modal-header">
            <span class="category" style="color: var(--primary-color); font-weight: 700; text-transform: uppercase; font-size: 0.9rem;">${project.tech[0]}</span>
            <h2>${project.title}</h2>
        </div>
        <img src="${project.img}" alt="${project.title}" class="modal-img">
        <div class="modal-info-grid">
            <div class="modal-desc">
                <h3>프로젝트 설명</h3>
                <p>${project.description}</p>
                <br>
                <h3>담당 역할</h3>
                <p>${project.role}</p>
            </div>
            <div class="modal-details">
                <h3>주요 기능</h3>
                <ul>
                    ${project.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
                <h3>사용 기술</h3>
                <div class="tech-tags">
                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
                <br>
                <h3>배운 점</h3>
                <p>${project.learned}</p>
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scroll
}

closeModal.onclick = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// --- Active Nav Link Update ---
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
}

// --- Back to Top ---
document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
