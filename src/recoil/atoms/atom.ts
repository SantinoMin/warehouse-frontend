import { atomWithStorage, createJSONStorage } from 'jotai/utils';


// 쿠팡의 경우 여러 지점이 있기에, user가 branch 하나는 가지고 있어야 함
// branchCode 하나씩 필수로 가지고 있기
export const initUser = {
    branchCode : '',
    branchName : '',
    useName: '',
    depName: '',
    roles: ''
}

// 로컬 스토리지에 user저장 (테마,언어 설정, 자동 로그인 여부, UI 사용자 설정 등)
export const userLocalAtom = atomWithStorage(
    "userLocal",
    initUser,
    createJSONStorage(() => localStorage)
);

// 세션 스토리지에 user저장(로그인 세션 정보, 현재 로그인한 사용자 정보, 장바구니 임시 데이터, 페이지 간 이동 시 필요한 임시 데이터 등)
export const userAtom = atomWithStorage(
    "user", // user라는 이름으로 저장
    initUser, // 최초 저장할 형식(기본값)
    createJSONStorage(() => sessionStorage) // 해당 값들을 저장할 위치(sessionStorage or localStorage)
);

// 세션 스토리지에 로그인 token 정보 저장
export const tokenAtom = atomWithStorage(
    "token",
    '',
    createJSONStorage(()=> sessionStorage)
);

// 세션 스토리지에 알람 firebase token 저장
export const fcmTokenAtom = atomWithStorage(
    'fcmtoken',
    '',
    createJSONStorage(()=>sessionStorage)
);



