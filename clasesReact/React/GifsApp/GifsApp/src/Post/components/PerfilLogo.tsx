export const PerfilLogo = () => {
    const profileImageUrl = "https://placehold.co/100x100/DDEBFF/0052CC?text=User&font=inter";
    return (
        <div className="contentLogo profile-logo">
            <img src={profileImageUrl} alt="Logo de perfil" className="logoImg" />
        </div>
    )
}
