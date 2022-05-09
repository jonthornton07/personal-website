const HomeHeader = () => {
    return (
        <div className='bg-gradient-to-r from-neutral-800 to-neutral-900 pb-5 flex flex-col'>
            <img className="h-40 rounded-full place-self-center" src={require(`../../assets/media/images/profilePicture.png`)} alt="A professional headshot of Jon Thornton"></img>
            <div className='text-4xl text-white place-self-center font-sans'>Jon Thornton</div>
            <div className='text-base text-white place-self-center font-light'>Software Engineer | Leader | Father</div>
        </div>
    )
}

export default HomeHeader