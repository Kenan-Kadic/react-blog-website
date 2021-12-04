import Post from "../post/Post"
import "./posts.scss"

const Posts = props => {
    return (
        <div className="posts">
            {props.children}
            <Post 
            postTitle=" Nurses with burnout: A major problem that continues as nurse shortages worsen Nationwide."
            postImage="https://images.pexels.com/photos/3791136/pexels-photo-3791136.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
            postText="Nurses and other front-line health care workers across the state and nation are feeling deeply stressed out and overwhelmed on their job,
            and companies are now wondering what can be done to address this issue. With some hospitals losing more than 50 percent of their staff in the last year, 
            staffing shortages are expected to continue. One of the main reasons for these shortages is the fact that nurses feel burned 
            out while performing their job. This feeling of burnout has worsened lately, due to a pandemic that has dragged on for years now with no official 
            end in sight."
            />
            <Post 
            postTitle="Fake vaccine cards on the rise in America."
            postImage="https://cdn.pixabay.com/photo/2021/12/01/13/28/covid19-6837938_960_720.png"
            postText="In recent months, federal and state officials have warned about the possibility of counterfeit cards that look 
            like ones authorized by the U.S. Centers for Disease Control and Prevention.ions, the name and dose numbers of the vaccines 
            and the dates and locations they were given. Some businesses, governments and groups require employees to show proof of vaccination."
            />
    
            <Post 
            postTitle="Nevada nurses must complete ‘cultural competency’ course to renew license."
            postImage="https://cdn.pixabay.com/photo/2017/10/01/14/02/religion-2805620_960_720.jpg"
            postText="Starting Jan. 1, all nurses must complete an approved “cultural competency” course in order to renew their license. 
            The requirement was created by Assembly Bill 337. The requirement will also apply to all healthcare professionals as part of 
            NRS 449.103. The training covers a wide variety of topics including bias, discrimination, race, religion, gender identity, 
            disabilities and much more."
            />

            <Post 
            postTitle="Traveling nurses in South Carolina nearly double during COVID."
            postImage="https://cdn.pixabay.com/photo/2014/10/26/15/23/home-503919_960_720.jpg"
            postText='A local recruiting agency said the number of traveling nurses across the state has nearly doubled since the pandemic started.
                      Roper St. Francis said it has 150 traveling nurses on staff. MUSC said 126 of its nurses are traveling.
                      "There’s been a big push for med-surg and PCU, which is a step down from ICU and ICU nurses", said Valarie Yarborough, recruiting manager at ATC Healthcare.'
            />
        </div>
    )
};
export default Posts;