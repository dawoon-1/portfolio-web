// --- Project Data ---
const projects = [
    {
        id: 1,
        title: "천원의 아침밥 정보 제공 시스템",
        category: "Android App",
        description: "교내 '천원의 아침밥' 운영 정보를 학생들이 쉽고 빠르게 확인할 수 있도록 기획한 복지 정보 접근성 향상 프로젝트입니다. 파편화되어 있던 식단, 시간, 공지사항을 하나의 플랫폼으로 통합했습니다.",
        tech: ["Java", "Android Studio", "Room Database"],
        role: "사용자 인터페이스(UI) 설계 및 로컬 데이터 영속성 관리 기능 구현",
        features: [
            "실시간 일일/주간 식단 정보 조회",
            "운영 시간 및 위치 정보 안내",
            "중요 공지사항 리스트업",
            "Room DB를 활용한 오프라인 식단 데이터 캐싱"
        ],
        learned: "사용자 관점에서 필요한 정보를 선별하는 UI/UX 기획 역량을 쌓았으며, 특히 안드로이드의 Fragment와 RecyclerView를 활용한 효율적인 화면 구성 방식을 깊이 있게 학습했습니다.",
        img: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "스마트 홈 오토메이션 보안 시스템",
        category: "IoT System",
        description: "침입 감지 및 원격 모니터링을 지원하는 저비용 고효율 스마트 홈 보안 솔루션입니다. 물리적인 하드웨어 센서와 모바일 앱을 연동하여 실시간 보안 알림 시스템을 구축했습니다.",
        tech: ["Arduino", "ESP32-CAM", "Blynk", "Wi-Fi Communication"],
        role: "하드웨어 회로 설계 및 ESP32-CAM 기반 영상 스트리밍/캡처 로직 구현",
        features: [
            "PIR 센서를 활용한 침입자 감지 및 경고음 출력",
            "침입 감지 시 즉각적인 사진 촬영 및 모바일 푸시 알림",
            "Blynk 앱을 통한 경계 모드 원격 설정/해제",
            "Wi-Fi 기반의 실시간 현장 모니터링"
        ],
        learned: "임베디드 장치와 클라우드 서버 간의 Wi-Fi 통신 구조를 이해하게 되었으며, 하드웨어 제약 조건 속에서 소프트웨어를 최적화하는 경험을 쌓았습니다.",
        img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "TripFlow: 여행 일정 관리 앱",
        category: "Android App",
        description: "여행의 모든 순간을 체계적으로 계획하고 지도로 확인할 수 있는 올인원 일정 관리 서비스입니다. 장소 탐색과 일정 기록의 연결성을 높이는 데 집중했습니다.",
        tech: ["Java", "Android Studio", "Room Database", "Naver Map API"],
        role: "프로젝트 전체 기획, UI/UX 상세 설계 및 지도 API 기반 위치 서비스 구현",
        features: [
            "네이버 지도 API 연동을 통한 장소 탐색 및 마커 표시",
            "드래그 앤 드롭 방식의 직관적인 일정 추가 및 순서 관리",
            "가고 싶은 장소를 저장하는 위시리스트 기능",
            "일정별 메모 및 장소 상세 정보 저장"
        ],
        learned: "외부 API 연동 과정에서의 트러블슈팅 경험을 쌓았으며, 사용자 여정 지도(User Journey Map)를 고려한 UX 설계의 중요성을 깨달았습니다.",
        img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "AI 집중도 분석 코치",
        category: "AI / Computer Vision",
        description: "웹캠 영상 분석을 통해 사용자의 학습 집중도를 실시간으로 측정하고 피드백을 제공하는 AI 시스템입니다. 딥러닝 모델과 영상 처리 알고리즘을 결합하여 비대면 학습 환경의 집중도 저하 문제를 해결하고자 했습니다.",
        tech: ["Python", "YOLOv8", "OpenCV", "MediaPipe"],
        role: "객체 탐지 모델 연동 및 EAR(Eye Aspect Ratio) 기반 집중도 분석 알고리즘 구현",
        features: [
            "YOLOv8을 활용한 사람 및 스마트폰 사용 여부 실시간 탐지",
            "MediaPipe 기반 안구 랜드마크 추출 및 눈 감김(졸음) 분석",
            "고개 방향(Pose Estimation) 분석을 통한 주의 이탈 감지",
            "누적 데이터를 바탕으로 한 집중도 점수화 및 통계 리포트"
        ],
        learned: "Computer Vision 기술이 실생활 문제를 해결하는 강력한 도구가 될 수 있음을 체감했으며, Python 기반의 데이터 분석 및 시각화 프로세스를 익힐 수 있었습니다.",
        img: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80"
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
            if (filter === 'all' || card.getAttribute('data-category').toLowerCase().includes(filter)) {
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
            <span class="category" style="color: var(--primary-color); font-weight: 700; text-transform: uppercase; font-size: 0.9rem;">${project.category}</span>
            <h2>${project.title}</h2>
        </div>
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
        if (window.pageYOffset >= sectionTop - 150) {
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
