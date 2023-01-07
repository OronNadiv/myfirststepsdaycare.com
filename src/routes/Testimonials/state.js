import React from 'react'
import { Link } from 'react-router-dom'

const State = [
  {
    short: cb => (
      <p>
        We’re writing to recommend the services of Zoila Chang and My First Steps Day Care. Our son has spend
        weekdays in Zoila’s care since December 2017, and we could not be happier with our decision to enroll
        him at My First Steps.
        <br /><br />
        Zoila has fostered our son’s growth during the hours when we cannot look after him consistently.
        Although it’s natural to have some trepidation at leaving a young child in someone else’s care for
        many hours each week. We were quickly set at ease once we came to know Zoila. She was recommended by a
        dear friend of ours, and we met several other parents at an early evening party for the children in her
        care. We could see that she had won the trust of everyone present, and we soon felt the same way.
        <span className='testimonial-more'>
          <br />
          [<Link onClick={cb}>Read Full Testimonial</Link>]
        </span>
      </p>
    ),
    long: () => (
      <p>
        We’re writing to recommend the services of Zoila Chang and My First Steps Day Care. Our son has spend
        weekdays in Zoila’s care since December 2017, and we could not be happier with our decision to enroll
        him at My First Steps.
        <br /><br />
        Zoila has fostered our son’s growth during the hours when we cannot look after him consistently.
        Although it’s natural to have some trepidation at leaving a young child in someone else’s care for
        many hours each week. We were quickly set at ease once we came to know Zoila. She was recommended by a
        dear friend of ours, and we met several other parents at an early evening party for the children in her
        care. We could see that she had won the trust of everyone present, and we soon felt the same way.
        <br /><br />
        We are very happy with the way things have turned out. Our son is thriving - his naps are great (he
        wasn’t such a great napper before Zoila), he eats vegetables eagerly, and he’s happy in a safe, structured
        environment. Zoila’s experience and expertise has helped us be better parents. She has both encouraged
        and celebrated our son’s good behavior, and has been able to impart a sense of right and wrong in
        situations when we cannot be there to teach him.
        <br /><br />
        Our son has made friends with the other children he sees each day - it’s a small group of just four
        children, so Zoila is available to give them the necessary attention at this critical stage of their
        growth. The children have a safe, colorful space in which to play, and quiet rooms for their naps.
        <br /><br />
        We are thrilled that Zoila prefers to cook organic, healthy food for the children. We look forward
        consistently to her festive birthday celebrations and reunion parties for the children. We also appreciate
        that she has stressed responsible compliance with respect to certain formalities of the business, such
        as logging visitors, collecting vaccination certificates and recording sign-ins and sign outs.
        <br /><br />
        We wholeheartedly recommend Zoila Chang and My First Steps day care. Her care has been a huge part of
        our son’s early childhood development, and we will miss her greatly when our son moves onto the next
        stage of his life.
        <br /><br />
				Sincerely,
      </p>
    ),
    author: 'Paul and Christina (Feb 2019)'
  },
  {
    short: cb => (
      <p>
        We are so lucky to be part of Zoila’s community and to welcome us into her family. From the very beginning,
        it always felt more than just a daycare because Zoila creates such a warm and loving environment. She even
        has the kids call her Tia - Spanish for Aunt, and her husband, Chi, Tio - Spanish for Uncle. Every
        interaction with her tells you that she really whole heartedly care for all the children, and treats them
        like her own children. As a first time and full time working mom, I feel so blessed to know that while I
        am away, my child is in a loving and nurturing environment.
        <span className='testimonial-more'>
          <br />
          [<Link onClick={cb}>Read Full Testimonial</Link>]
        </span>
      </p>
    ),
    long: () => (
      <p>
        We are so lucky to be part of Zoila’s community and to welcome us into her family. From the very beginning,
        it always felt more than just a daycare because Zoila creates such a warm and loving environment. She even
        has the kids call her Tia - Spanish for Aunt, and her husband, Chi, Tio - Spanish for Uncle. Every
        interaction with her tells you that she really whole heartedly care for all the children, and treats them
        like her own children. As a first time and full time working mom, I feel so blessed to know that while I
        am away, my child is in a loving and nurturing environment.
        <br /><br />
        Zoila is amazing caregiver and has decades of experience with natural material instinct. She was very
        helpful in guiding us through our first fevers, teething, weaning, everything. You had a question, she had
        an answer and offered her opinion on exploring the challenges of motherhood. Additionally she really learns
        the habits of the children and picks up on their interests and personalities. She’s very encouraging and
        often buys new toys and puzzles to spark their natural curiosity. When we go to pick up my daughter, she
        gives a report as to her development milestones.
        <br /><br />
        Additionally, she also offers discipline and structure, which are all very important to a healthy upbringing.
        The children eat their meals at the dining room table with their assigned seats, cups, and plates. She also
        teaches manners, such as having to excuse themselves from the dining room table. She has a set routine and
        nap schedule the kids appreciates since they know to expect certain activities at set times.
        <br /><br />
        My daughter has been there since she was four months old, and Zoila was very flexible and was allowed us
        to use cloth diapers (which I know can be a hassle), and always super supportive about breastmilk, no matter
        how little she always encouraged me to keep pumping. Zoila even helped with potty training and got her
        trained by the age of two!
        <br /><br />
        As my daughter transitioned into real food, Zoila was instrumental in exposing her to all sorts of food
        and textures. Zoila always stresses the importance of a healthy diet and cooks amazing foods. She’s a very
        adventurous eater - her favorite meal is salmon, broccoli, and mushrooms. She has a great palette all in
        thanks to Zoila’s cooking and exposing her to all sort of foods. I am positive my daughter eats a more
        varied, healthy, and delicious diet than most adults.
        <br /><br />
        I highly recommend Zoila and would love to discuss more over the phone or via email, please reach out to
        Zoila for my contact information.
      </p>
    ),
    author: 'Angela and Mike (Nov 2017)'
  },
  {
    short: cb => (
      <p>
        I’m so proud to be alum of My First Steps Daycare. Although our time with Zoila / Tia and Chi / Tio
        was shorter than expected (our family ending up relocating out of the Bay Area), it was a very
        special time in our life as new parents with them in our support network (my son was there from 6-14 months).
        <br /><br />
        You see, Tia and Tio care deeply for your child, and treat you and your family as part of theirs.
        Zoila provides the children with tasty homemade food that is also healthy and made with organic ingredients,
        and for that reason I see my son developing a wide palette for different tastes, textures, and flavors.
        <span className='testimonial-more'>
          <br />
          [<Link onClick={cb}>Read Full Testimonial</Link>]
        </span>
      </p>
    ),
    long: () => (
      <p>
        I’m so proud to be alum of My First Steps Daycare. Although our time with Zoila / Tia and Chi / Tio
        was shorter than expected (our family ending up relocating out of the Bay Area), it was a very
        special time in our life as new parents with them in our support network (my son was there from 6-14 months).
        <br /><br />
        You see, Tia and Tio care deeply for your child, and treat you and your family as part of theirs.
        Zoila provides the children with tasty homemade food that is also healthy and made with organic ingredients,
        and for that reason I see my son developing a wide palette for different tastes, textures, and flavors.
        <br /><br />
        Zoila also helps the children develop relationships with one another. Some of my favorite experiences with
        Zoila are: 1) I appreciate her structure and firmness with the children, but she was still flexible to
        meeting individual needs, and has a good sense of humor; 2) She builds community. We were the first of
        our friends to have kids, and we have no family in the area, so it felt like we were really on our own.
        There are children’s birthday parties, and an annual picnic, where alums (I’m talking like families
        from the last 10 -20 years that still keep in touch), that we were welcomed into. This was mentioned
        in several phone phone calls to references and this was the number one reason we chose Zoila because
        she gave us a family and support network that we didn’t have here in San Francisco. And 3) She really
        knows your child and has a very special bond with them. For me, this was the assurance and security
        knowing my son was just as loved and enjoyed by someone else while my husband and I were at work.
        This means she knows their cues and gives you insights about their developments (such as age appropriate
        toys).
        <br /><br />
        I was also happy to receive recommendations from her, whether from dealing with sleepless nights, to
        home remedies and sippy cups.
        <br /><br />
        Zoila exceeded our expectations and although we’re sad to go, we plan on keeping in touch.
      </p>
    ),
    author: 'Heather and Harry (Nov 2017)'
  },
  {
    short: cb => (
      <p>
        For almost 2 years now our daughter has been in daycare at My First Steps Daycare, and we couldn’t be more
        pleased with the development and growth we’ve seen under the tutelage of Zoila. She took our daughter at an
        early age (less than 1 year old) and has been crucial in the forming and shaping of her development, as has
        provided her with a loving, supportive, and challenging environment for her to learn, play and grow.
        <br /><br />
        The multi-cultural environment and bi-lingual approach has provided our daughter with a solid foundation
        for her to build upon, and her approach to nutrition and her daily menus of home cooked-food are superior
        to all of the other day care and pre-schools that we interviewed with. We also really like the smaller
        group setting so that our daughter has the personal attention and guidance she needs at this stage in
        her life.
        <br /><br />
        We are saddened that our daughter is moving on to preschool, but we highly recommend My First Steps daycare
        to any parents that are looking for a safe, supportive environment for their little ones.
      </p>
    ),
    author: 'Laura and Warner (Aug 2017)'
  },
  {
    short: (cb) => (
      <p>
        Dear Prospective Parent,
        <br /><br />Congratulations on your little one!&nbsp;&nbsp;If you are meeting with Zoila, you are
        probably
        nearing the end of your childcare search.
        <br /><br />We love Zoila and feel so lucky to have found her.&nbsp;&nbsp;We were looking for a
        bilingual
        English/Spanish, play-based program, and a warm, nurturing environment.&nbsp;&nbsp;We did not want
        strict
        schedules, high turn over, or academic programs.&nbsp;&nbsp;We toured dozens of daycares (a necessary
        evil
        in this beautiful city of ours) and My First Steps was our top choice.&nbsp;&nbsp;The homemade organic
        food was a total bonus.
        <br /><br />Our son has been there since...
        <span className='testimonial-more'>
          <br />
          [<Link onClick={cb}>Read Full Testimonial</Link>]
        </span>
      </p>
    ),
    long: () => (
      <p>
        Dear Prospective Parent,
        <br /><br />Congratulations on your little one!&nbsp;&nbsp;If you are meeting with Zoila, you are
        probably nearing the end of your childcare search.
        <br /><br />We love Zoila and feel so lucky to have found her.&nbsp;&nbsp;We were looking for a
        bilingual English/Spanish, play-based program, and a warm, nurturing environment.&nbsp;&nbsp;We did
        not
        want strict schedules, high turn over, or academic programs.&nbsp;&nbsp;We toured dozens of daycares
        (a
        necessary evil in this beautiful city of ours) and My First Steps was our top choice.&nbsp;&nbsp;The
        homemade organic food was a total bonus.
        <br /><br />Our son has been there since he was three months old, and Zoila has lovingly guided us
        through all our first-time-parent anxieties, fevers, teething, night wakings, weaning, you name
        it.&nbsp;&nbsp;She took videos of his first attempts at crawling and helped me decipher some of his
        Spanglish babbles.
        <br /><br />'Tia' was his third word, after 'Dada' and 'Mama'.
        <br /><br />Besides an exceptionally loving, calm, and nurturing environment, I have loved the way
        Zoila
        really 'follows the child.' She does not have any set curricula, but she is highly attuned to and
        supportive of the kids' multifaceted interests.&nbsp;&nbsp;When they go on a puzzle binge, she
        orders ten new puzzles to keep them interested.&nbsp;&nbsp;When they start building pillow forts, she
        stocks up on pillows of all sizes and Colors.&nbsp;&nbsp;When they start singing 'Twinkle Twinkle,'
        she
        teaches them the Spanish version.&nbsp;&nbsp;She is a keen observer of children, and consistently
        offers
        appropriate materials to engage and encourage their natural curiosity.
        <br /><br />Now my son is almost two years old, talking up a storm, nearly out of diapers, and a
        veggie
        connoisseur - all thanks to Zoila.&nbsp;&nbsp;Tia is still helping steer all of us toward sanity by
        sharing discipline strategies, recommending developmentally appropriate toys, and even helping him
        transition to preschool (sob!).&nbsp;&nbsp;I don't even want to think about where we would be
        without her loving, experienced guidance.
        <br /><br />After two years with our beloved Tia, I am honored to give her my highest
        recommendation.&nbsp;&nbsp;If you have any further questions, please do not hesitate to contact me.
        <br /><br />Warmly,
      </p>
    ),
    author: 'Tristen C. (Jan 2017)'
  },
  {
    short: (cb) => (
      <p>
        Dear Prospective Parent,
        <br /><br />This letter is to affirm our highest endorsement of Zoila ("Tia") Chang as your child's
        daycare provider.&nbsp;&nbsp;Zoila cares very deeply about her children and we have greatly benefited from
        having our
        daughter at First Steps.&nbsp;&nbsp;She started when she was three months and stayed with Zoila until she
        turned 3 years old.&nbsp;&nbsp;Our daughter loved spending her days with Tia Zoila and the other children,
        sometimes making it difficult to pick her up at the end of the day because she didn&#39;t want to leave.
        <br /><br />Zoila provides age-appropriate care and stimulation for infants and toddlers and helped
        immensely in...
        <span className='testimonial-more'>
          <br />
          [<Link onClick={cb}>Read Full Testimonial</Link>]
        </span>
      </p>
    ),
    long: () => (
      <p>
        Dear Prospective Parent,
        <br /><br />This letter is to affirm our highest endorsement of Zoila ("Tia") Chang as your child's daycare
        provider.&nbsp;&nbsp;Zoila cares very deeply about her children and we have greatly benefited from
        having our daughter at First Steps.&nbsp;&nbsp;She started when she was three months and stayed with
        Zoila until she turned 3 years old.&nbsp;&nbsp;Our daughter loved spending her days with Tia Zoila and
        the other children, sometimes making it difficult to pick her up at the end of the day because she
        didn&#39;t want to leave.
        <br /><br />Zoila provides age-appropriate care and stimulation for infants and toddlers and helped
        immensely in our daughter&#39;s social and cognitive growth.&nbsp;&nbsp;By the time Our daughter
        entered pre-school, she had been potty trained for over a year, could recognize most letters of the
        alphabet, could count to 20, speak in clear full sentences in English, understand and communicate
        several phrases in Spanish, and was socially and emotionally well-adjusted.&nbsp;&nbsp;Her transition
        to preschool was seamless.
        <br /><br />Zoila is meticulously organized but also very flexible.&nbsp;&nbsp;Due to my wife's
        travel schedule and my occasional unpredictable days, Zoila has always been very accommodating in
        allowing the occasional early drop-off or late pick-up when necessary, and this has been incredibly
        helpful to us.
        <br /><br />Most importantly, Zoila provides a strong sense of community amongst the families
        attending First Steps.&nbsp;&nbsp;We all enjoy catching up with each other at the Friday evening
        birthday parties that Zoila holds for the children and their families.&nbsp;&nbsp;Several recently
        graduated families still attend these parties even though some of these children are in elementary
        school now.&nbsp;&nbsp;Zoila also holds an annual barbecue in the summer, which is widely attended by her
        graduates - some of whom are in high school! The attendance at these events are a clear testament to
        how much Zoila is adored by everyone who is part of the First Steps family.
        <br /><br />Leaving your child with Zoila is like leaving him/her with a trusted family member, but
        also with someone who provides a rigor and a standard for childhood development that comes with an
        experienced childcare professional.
        <br /><br />We cannot say enough great things about Tia Zoila and First Steps.&nbsp;&nbsp;If you have
        any further questions, please feel free to contact us.
        <br /><br />Sincerely,
      </p>
    ),
    author: 'Anu and Jennie (Oct 2016)'
  },
  {
    short: cb => (
      <p>
        The search for infant care started when I was 7 months pregnant. By San Francisco standards, this was pretty
        late and I was starting to panic. Until that point, I was more focused on reading every pre-natal book
        and taking every pre-natal class available. It was time to focus on after the baby’s arrival. I had phone
        screened several places and toured 3 other home daycares that were passable. But once I met Zoila, I
        immediately knew we found the right place for our daughter. Her home felt like a home-away-from-home
        and she had a gentle, confident way about her that I felt we would be partnering with a pro. This
        first foray in trusting maternal instincts was not wrong.
        <span className='testimonial-more'>
          <br />
          [<Link onClick={cb}>Read Full Testimonial</Link>]
        </span>
      </p>
    ),
    long: () => (
      <p>
        The search for infant care started when I was 7 months pregnant. By San Francisco standards, this was pretty
        late and I was starting to panic. Until that point, I was more focused on reading every pre-natal book
        and taking every pre-natal class available. It was time to focus on after the baby’s arrival. I had phone
        screened several places and toured 3 other home daycares that were passable. But once I met Zoila, I
        immediately knew we found the right place for our daughter. Her home felt like a home-away-from-home
        and she had a gentle, confident way about her that I felt we would be partnering with a pro. This
        first foray in trusting maternal instincts was not wrong.
        <br /><br />
        Being a new parent has had its challenges, but having our daughter at Zoila’s has undoubtedly eased the process.
        Coming into parenthood as what may describe as ‘your most rewarding and most difficult job’ as an absolute
        amateur with little family around us was daunting. By the time our daughter started at Zoila’s at 5 months old,
        it felt like the equivalent of having the Michael Jordan of childcare and parenting join our team to guide us
        and show us the way. She had already gone to the ‘championship’ so many times in successfully raising her
        own children and taking care of so many other children.
        <br /><br />
        Zoila has been a rock - constant and reliable - for which we are so grateful. As difficult as it was to return
        to work full-time, I could trust her implicitly and not have to worry about my daughter being well cared for.
        She was instrumental in encouraging me to keep pumping during year one. Without her introduction to a wide
        array of wholesome foods it would have been near impossible for 2 exhausted full-time working parents to
        now have an adventurous eater who goes for the vegetables without prompting. Not to mention her leadership
        and guidance in cooperation, conflict resolution, rule-following, etiquette, and encouraging a community
        among the parents that has been so enriching to our daughter and our lives. We will always look back on
        these early years and thought of Zoila will not be far in how she helped us along the journey.
      </p>
    ),
    author: 'Ky-Yen (Aug 2016)'
  },
  {
    short: cb => (
      <p>
        We looked at several child care options when we needed to find full-time care for our then-6-month-old
        son.&nbsp;&nbsp;And we were so happy when we found Zoila's daycare — it stood out in so many ways.
        <span className='testimonial-more'>
          <br />
          [<Link onClick={cb}>Read Full Testimonial</Link>]
        </span>
      </p>
    ),
    long: () => (
      <p>
        We looked at several child care options when we needed to find full-time care for our then-6-month-old
        son.&nbsp;&nbsp;And we were so happy when we found Zoila's daycare — it stood out in so many ways.
        <br /><br />
        Zoila takes a whole-hearted approach to her job of caring for children.&nbsp;&nbsp;Some family daycares are
        just a basement room with some toys, but Zoila's entire house is set up for the kids — so they can play
        in
        the living room, and eat at the dining room table, and have fun in the toy room downstairs, and explore the
        backyard.&nbsp;&nbsp;Zoila has high-quality, developmentally appropriate toys and books in every space where
        the children play.&nbsp;&nbsp;She prepares amazing home-cooked, organic, healthy, and delicious meals for
        the
        kids, and encourages them to try new foods — which they're happy to do because everything is so tasty!
        She
        has a strong routine for the kids that includes a balance of play time, meal time, and quiet time, which
        enables the children to feel comfortable and know what to expect.&nbsp;&nbsp;She pays attention to each
        child's interests and strengths, and she teaches them to respect and care for each other — so that when
        our son was a toddler, his 3-year-old friend looked out for him, and now that our son is the big 3-year-old,
        he looks out for the babies.
        <br /><br />
        Zoila's is so much more than just a daycare — it really is an extended family.&nbsp;&nbsp;Our son has
        strong friendships with the other children there, who have all known each other since they were infants, and
        beyond that we know Zoila's family, she knows our family, and we know the parents and siblings of the
        other children too — as well as the families of many alumni, who keep coming back for the birthday parties
        and
        annual picnic that Zoila holds every year.&nbsp;&nbsp;A great family daycare!
      </p>
    ),
    author: 'Sara and Justin (Aug 2016)'
  },
  {
    short: (cb) => (
      <p>
        Hello Parents,
        <br /><br />We are writing this testimonial because at one time, we were just like you...&nbsp;&nbsp;anxious
        about finding a daycare that will meet all of our child's needs.
        <br /><br />If you are reading this testimonial and she has an available open spot...&nbsp;&nbsp;this is
        your
        lucky day!&nbsp;&nbsp;You have been granted the GOLDEN TICKET.&nbsp;&nbsp;Seize the moment, because you may
        never ever find a daycare provider of this caliber again.
        <span className='testimonial-more'>
          <br />
          [<Link onClick={cb}>Read Full Testimonial</Link>]
        </span>
      </p>
    ),
    long: () => (
      <p>
        Hello Parents,
        <br /><br />We are writing this testimonial because at one time, we were just like you...&nbsp;&nbsp;anxious
        about finding a daycare that will meet all of our child's needs.
        <br /><br />If you are reading this testimonial and she has an available open spot...&nbsp;&nbsp;this is
        your
        lucky day!&nbsp;&nbsp;You have been granted the GOLDEN TICKET.&nbsp;&nbsp;Seize the moment, because you may
        never ever find a daycare provider of this caliber again.
        <br /><br />The children call Zoila “Tia” (Spanish for 'auntie'), and she really does become part of
        the family.&nbsp;&nbsp;Zoila cares deeply about the children; she nurtures them and provides them with a
        safe
        yet fun environment.&nbsp;&nbsp;It is a second home for the kids.
        <br /><br />Tia believes that routines are important for the children and ensures they follow a steady
        routine
        of educational activities, play time, nap time, etc.&nbsp;&nbsp;Our son spent many hours reading, playing
        puzzles, and talking to Tia and the other children.&nbsp;&nbsp;He learned his numbers, colors, and many
        other
        things in both English and Spanish.&nbsp;&nbsp;He even learned to use the potty – he was out of diapers at
        12
        months thanks to Zoila.
        <br /><br />Zoila also takes care of the children's nutritional needs: she makes fresh bread, provides
        organic fruits for snacks, and home-cooked meals for lunch every day.&nbsp;&nbsp;No junk food, sugary
        sweets,
        or processed foods.&nbsp;&nbsp;The children eat the best food here...&nbsp;&nbsp;there will be days when you
        come to pick up your child and get jealous that the food you are smelling is not for you.
        <br /><br />We are going to miss sending our son to Tia's house.&nbsp;&nbsp;She does not provide a
        daycare, she provides an extended family.&nbsp;&nbsp;We love her.
        <br /><br />All the best,
      </p>
    ),
    author: 'Kim and Philip (Aug 2015)'
  },
  {
    short: cb => (
      <p>
        Zoila has been caring for our now twenty month old daughter since she was six months old.&nbsp;&nbsp;We
        continue to be impressed with Zoila and her family.&nbsp;&nbsp;Zoila is loving, honest, dedicated, and
        patient.&nbsp;&nbsp;We are confident that Zoila is taking amazing care of our daughter - she eats full,
        healthy meals (she often does not have much of an appetite left for dinner), she is learning to count to ten
        in Spanish and Chinese, and she now says "gracias" (thank you) regularly.&nbsp;&nbsp;When we drop our
        daughter
        off, we feel like we are taking her to a close family or friend's house.&nbsp;&nbsp;Zoila exudes warmth
        and compassion, and it is clear that she truly loves taking care of children.
      </p>
    ),
    author: 'Lisa and Oron (Jun 2014)'
  },
  {
    short: cb => (
      <p>
        We were introduced to Zoila Chang's My First Steps Daycare by our close friend about 5 years
        ago.&nbsp;&nbsp;We enrolled our first son when he was three months old.&nbsp;&nbsp;He stayed there until he
        entered preschool at age three.&nbsp;&nbsp;Our experience with Zoila is very positive.&nbsp;&nbsp;Zoila is a
        very kind and caring person.&nbsp;&nbsp;She loves her kids in the daycare like her own children, without
        spoiling them.&nbsp;&nbsp;We can totally concentrate on...
        <span className='testimonial-more'>
          <br />
          [<Link onClick={cb}>Read Full Testimonial</Link>]
        </span>
      </p>
    ),
    long: () => (
      <p>
        We were introduced to Zoila Chang's My First Steps Daycare by our close friend about 5 years
        ago.&nbsp;&nbsp;We enrolled our first son when he was three months old.&nbsp;&nbsp;He stayed there until he
        entered preschool at age three.&nbsp;&nbsp;Our experience with Zoila is very positive.&nbsp;&nbsp;Zoila is a
        very kind and caring person.&nbsp;&nbsp;She loves her kids in the daycare like her own children, without
        spoiling them.&nbsp;&nbsp;We can totally concentrate on our work knowing that our son is being taken care
        well.
        <br /><br />
        Zoila provides a safe, healthy and stimulating environment for him and other kids to grow
        up.&nbsp;&nbsp;She cooks home-made foods for them and feed them with lots of vegetables and
        fruits.&nbsp;&nbsp;There is plenty of space indoor and out at the garden for them to explore, not to mention
        lots of great educational toys for kids of different ages.&nbsp;&nbsp;She plays with them, introducing them
        to
        books, music and good manners.
        <br /><br />
        She generously organizes birthday and holiday parties for every
        family to enjoy.&nbsp;&nbsp;When we are late from work to pick up our son, Zoila and her family is very
        accommodating and we are totally stress-free.&nbsp;&nbsp;Her family has been very supportive and our son
        likes
        them very much.&nbsp;&nbsp;He grew up happily and healthily in My First Steps Daycare and it is always
        difficult to get him out of the Daycare when it is time to go home.
        <br /><br />
        We maintain close contact with other kids and families even they had left the daycare now.
        We have so much love and confidence in Zoila that when our twin babies were three months old, we let them
        join the big family and have fun growing up with other kids there. We are very grateful to have Zoila taking
        care of our sons.
      </p>
    ),
    author: 'L. family (Aug 2013)'
  },
  {
    short: cb => (
      <p>
        Leaving your little one in the hands of someone else is a difficult and emotional thing to do
        for parents. My daughter was 8 months old when she started under Zoila’s care, and it was
        difficult for me & my wife. But Zoila and her husband run a different kind of day care:
        they welcome us as if we were part of their family, and they genuinely care about the kids.
        <span className='testimonial-more'>
          <br />
          [<Link onClick={cb}>Read Full Testimonial</Link>]
        </span>
      </p>
    ),
    long: () => (
      <p>
        Leaving your little one in the hands of someone else is a difficult and emotional thing to do
        for parents. My daughter was 8 months old when she started under Zoila’s care, and it was
        difficult for me & my wife. But Zoila and her husband run a different kind of day care:
        they welcome us as if we were part of their family, and they genuinely care about the kids.
        At the start of our relationship, Zoila assured us that she’d take care of Charlotte, and
        that – to us – makes a difference. She repeatedly said, “Don’t worry about her. I got her,
        I know you have to work, no need to worry about her”. That meant a lot to us.
        <br /><br />
        I have experience with other day care where I felt like our relationship was all “business”.
        With Zoila, I feel like leaving our daughter in the hands of her own grandmother. This is a
        wonderful family that would make your children feel at home. As an example, Zoila’s husband
        loves carrying Charlotte, to the point where sometimes she didn’t want to go home! It just
        gives you that nice, warm feeling knowing that your child is being loved (and a little
        spoiled!). Also, occasionally Zoila invites the parents over for evening birthday parties
        where she’d cook for everyone. Relationships matter with this family, and we’re glad to be
        a part of it.
        <br /><br />
        Specific to the day care environment and logistics, here are the things that I like about this place:
        <br />·      Clean, safe, and loving environment
        <br />·      Healthy, organic, freshly-made meals
        <br />·      Trips to the park
        <br />·      Great communication / feedback on what happens during the day
        <br /><br />
        Please do not hesitate to contact me should you have any questions.
      </p>
    ),
    author: 'Teddy H. (July 2013)'
  },
  {
    short: cb => (
      <p>
        It is with great pleasure that I recommend My First Steps Daycare to you. Zoila Chang, the heart of this
        daycare, is truly a gem. She has a kind-hearted, patient and nurturing personality. My first child went
        to two daycares and he is now in preschool. Through all of our experiences with different facilities,
        I am delighted to say I have never found anything as wonderful and heartwarming as Zoila’s place.
        <br /><br />
        My daughter, Charlotte, was 7 [months] when she first started. I had to return to work after the end of
        my maternity leave. And as any mother to a young baby, I was very passionate about finding the perfect
        place for her where the caretaker would understand her developmental, educational, emotional and safety
        needs. I had in my mind the “perfect” place for my baby and when I walked into Zoila’s home, I knew I
        had found the place I dreamed of finding.
        <span className='testimonial-more'>
          <br />
          [<Link onClick={cb}>Read Full Testimonial</Link>]
        </span>
      </p>
    ),
    long: () => (
      <p>
        It is with great pleasure that I recommend My First Steps Daycare to you. Zoila Chang, the heart of this
        daycare, is truly a gem. She has a kind-hearted, patient and nurturing personality. My first child went
        to two daycares and he is now in preschool. Through all of our experiences with different facilities,
        I am delighted to say I have never found anything as wonderful and heartwarming as Zoila’s place.
        <br /><br />
        My daughter, Charlotte, was 7 [months] when she first started. I had to return to work after the end of
        my maternity leave. And as any mother to a young baby, I was very passionate about finding the perfect
        place for her where the caretaker would understand her developmental, educational, emotional and safety
        needs. I had in my mind the “perfect” place for my baby and when I walked into Zoila’s home, I knew I
        had found the place I dreamed of finding.
        <br /><br />
        Zoila went above and beyond with our baby. Two weeks before my baby started her first day, Zoila asked
        us to bring her over a few hours every day so she could get to know everyone there. Zoila took the time
        to help my baby adjust to her new environment and made the transition painless.
        <br /><br />
        Zoila fed my baby balanced, healthy meals and snacks. She always prepared healthy organic home meals,
        fruits and vegetables. She pureed them and put them in baby containers so my baby can have fresh meals
        every day. Often times, she sneaked in some yummy goodies for us to share at home.
        <br /><br />
        Zoila helped my baby reach her developmental milestone. She was so overjoyed when my baby crawled for
        the first time and took a video of it for her keepsake.
        <br /><br />
        One of the qualities that I loved most about Zoila was her honesty and willingness to communicate.
        When my husband or I picked her up, she always informed us of observations she’d made about my baby,
        (health, behavior, potential problems, meals, naptime, even how many diapers she had been through
        during that day). And when we had any concerns, she would listen to us, reassured us with her
        knowledge and experience and worked with us to achieve our goals.
        <br /><br />
        My daughter loved Zoila dearly, and my husband and I both hold her in the highest regard. Choosing
        someone to care for your children is a very important decision and not one to be made lightly. Zoila
        is a wonderful choice. She is very responsible, kind, warm and caring.
      </p>
    ),
    author: 'Jenny W. (July 2013)'
  },
  {
    short: cb => (
      <p>
        My daughter Gianna attended My First Steps Daycare in 2011-2012 for a total of 13 months with Zoila
        Chang.&nbsp;&nbsp;We choose Zoila to care for our daughter because of the warm and welcoming environment she
        presented us with.&nbsp;&nbsp;I loved that she provided the children with nutritious, homemade meals that
        were
        always changing and never involved a microwave or a juice box.&nbsp;&nbsp;I liked how...
        <span className='testimonial-more'>
          <br />
          [<Link onClick={cb}>Read Full Testimonial</Link>]
        </span>
      </p>
    ),
    long: () => (
      <p>
        My daughter Gianna attended My First Steps Daycare in 2011-2012 for a total of 13 months with Zoila
        Chang.&nbsp;&nbsp;We choose Zoila to care for our daughter because of the warm and welcoming environment she
        presented us with.&nbsp;&nbsp;I loved that she provided the children with nutritious, homemade meals that
        were
        always changing and never involved a microwave or a juice box.&nbsp;&nbsp;I liked how every child was
        celebrated on their birthday.&nbsp;&nbsp;All the parents and children would be invited to Zoila's house
        and welcomed with lots of food and laughter.&nbsp;&nbsp;This gave us an opportunity to create a community
        amongst other parents and for our daughter to establish stronger relationships with her friends at
        daycare.&nbsp;&nbsp;While in Zoila's care my daughter learned the importance of manners, sharing and
        being
        active outside.&nbsp;&nbsp;Zoila worked with my schedule to make things easy on me, she understands that
        every
        family is different and welcomes everyone, I believe that is what sets her daycare apart from
        others.&nbsp;&nbsp;My daughter no longer attends daycare with Zoila because she started preschool, but Zoila
        still maintains a relationship with us and invites us to events.&nbsp;&nbsp;My First Steps Daycare is a fun
        and nurturing environment where every parent and child is welcomed and celebrated.
      </p>
    ),
    author: 'Alicia N. (Jan 2012)'
  },
  {
    short: cb => (
      <p>
        Ms. Zoila Chang, of My First Steps Daycare has my highest recommendation. My daughter began attending My
        First Steps Daycare Center in the Fall of 2009 when my daughter was around 1 ½ years old and she continued
        to take care of her until the Fall of 2011, when she was 3 ½ years old. Zoila has many years of experience
        as a daycare provider. Zoila is loving, patient, energetic, attentive and interested in providing a
        balanced schedule that includes plenty of outdoor play, as well as indoor activities (art, reading,
        singing and play). Any family would be very lucky to have her care for their child(ren).
        <span className='testimonial-more'>
          <br />
          [<Link onClick={cb}>Read Full Testimonial</Link>]
        </span>
      </p>
    ),
    long: () => (
      <p>
        Ms. Zoila Chang, of My First Steps Daycare has my highest recommendation. My daughter began attending My
        First Steps Daycare Center in the Fall of 2009 when my daughter was around 1 ½ years old and she continued
        to take care of her until the Fall of 2011, when she was 3 ½ years old. Zoila has many years of experience
        as a daycare provider. Zoila is loving, patient, energetic, attentive and interested in providing a
        balanced schedule that includes plenty of outdoor play, as well as indoor activities (art, reading,
        singing and play). Any family would be very lucky to have her care for their child(ren).
        <br /><br />
        Zoila is extremely confident in her responsibilities and skill as a childcare provider. As a mother
        herself, Zoila brings with her a depth of understanding and experience to her work with children and
        infants. Zoila has an amazing ability to manage several busy children while always remaining calm
        and loving. She teaches the children she cares for many important life lessons: sharing and enjoying
        each others’ company, teaching older toddlers to be gentle and protective of the young babies and
        polite table manners.
        <br /><br />
        Zoila is very knowledgeable about choosing activities that are developmentally appropriate and
        stimulating. She also did an amazing job in developing our child’s vocabulary. Zoila would read
        to our daughter on a daily basis and when she was able to took her on excursions to the playground,
        shopping and to the Zoo. Zoila is generous with her affection for children and it is clear that
        she truly loves her job. Zoila is also fluent is Spanish and English. Our daughter benefited
        from this and learned many Spanish words and sayings.
        <br /><br />
        Zoila provides the children she cares for with delicious and well balanced home cooked meals.
        I was always amazed to hear of the variety of healthy foods that my daughter ate each day. My
        daughter’s palate has expanded and today she enjoys a wide range of foods.
        <br /><br />
        Zoila was incredibly reliable during the time our daughter attended My First Steps.
        <br /><br />
        We continue to use the drop-in services that Zoila offer’s to both our children when they have
        days off from school. Even though our children are different ages (3 years and 6 years) they always
        have a fun and engaging day at the daycare and look forward to their next visit.
        <br /><br />
        I cannot say enough about Zoila’s amazing abilities with children. I feel very fortunate to have
        met her and her care for our daughter. I am happy to answer any questions about Zoila’s abilities
        as a childcare provider.
      </p>
    ),
    author: 'Heather H. (Sep 2011)'
  },
  {
    short: cb => (
      <p>
        My daughter Natalia started going to Zoila’s (My First Steps) when she was six months old. Because my
        daughter Lucia, now in Kinder went to Zoila’s too, I felt very comfortable leaving Natalia in her care.
        <br /><br />
        My First Steps is a very nurturing and offers a safe environment for babies and young children. The
        kids learn to follow a routine: snack time, play time, lunch time, nap time… They also learn by playing
        with each other and with the big selection of toys and books.
        <span className='testimonial-more'>
          <br />
          [<Link onClick={cb}>Read Full Testimonial</Link>]
        </span>
      </p>
    ),
    long: () => (
      <p>
        My daughter Natalia started going to Zoila’s (My First Steps) when she was six months old. Because my
        daughter Lucia, now in Kinder went to Zoila’s too, I felt very comfortable leaving Natalia in her care.
        <br /><br />
        My First Steps is a very nurturing and offers a safe environment for babies and young children. The
        kids learn to follow a routine: snack time, play time, lunch time, nap time… They also learn by playing
        with each other and with the big selection of toys and books.
        <br /><br />
        Mrs. Zoila Chang celebrates kids B-days, some holidays and has a yearly picnic, this makes the kids feel
        special and for the families to know each other and socialize with the friendly Chang family.
        <br /><br />
        I’m very happy with the care my daughters Lucia and Natalia had at “My First Steps” the first years of their lives.
        <br /><br />
        Thanks you family Chang.
      </p>
    ),
    author: 'Conchita F. (Nov 2009)'
  },
  {
    short: cb => (
      <p>
        If you want a warm home environment for your child, Zoila will provide it in spades. Our daughter is inquisitive,
        helpful, caring, and confident in part from Zoila’s three years of attention to her. We chose Zoila because she
        was invested in her work. She takes continuing education classes to stay up to date on child nutrition and
        teaching techniques. She shows consideration for all the toys she purchases. Every toy has a teaching purpose...
        <span className='testimonial-more'>
          <br />
          [<Link onClick={cb}>Read Full Testimonial</Link>]
        </span>
      </p>

    ),
    long: () => (
      <p>
        If you want a warm home environment for your child, Zoila will provide it in spades. Our daughter is inquisitive,
        helpful, caring, and confident in part from Zoila’s three years of attention to her. We chose Zoila because she
        was invested in her work. She takes continuing education classes to stay up to date on child nutrition and
        teaching techniques. She shows consideration for all the toys she purchases. Every toy has a teaching purpose.
        What put her over the top for us were her own adult children. They are clever, polite, motivated, and love
        helping their mom.
        <br /><br />
        As we developed the relationship with her the reasons became even more pronounced. She lets us know the newest
        things she’s learned so we can provide consistency. She evaluates what next developmental milestone her kids
        need (or takes advice on what we want to work on next) and looks for toys and projects to address that. She
        found toys that helped our daughter with balancing, then moved on to learning her letters and is now expanding
        her Spanish vocabulary. Her adult children see how much she cares about her work and enjoy assisting her
        when they can - be it playing with the kids or cooking or cleaning. In the time our daughter was there we saw
        her son and daughter graduate college. She is the mother of three college graduates!
        <br /><br />
        What is best about Zoila is that she really has her dream job. There is nothing else she would rather do than
        take care of children. She provides them 3 nutritious meals a day that are more varied than what we could
        provide at home. She finds no greater satisfaction than to have playful, educated, well-fed kids.
        <br /><br />
        We have been very satisfied with Zoila’s care. We hope you will find the same.
      </p>
    ),
    author: 'Thuyen and Anthony (Oct 2009)'
  },
  {
    short: cb => (
      <p>
        Zoila provides a loving and warm environment for the children in her in-home day care.&nbsp;&nbsp;She works
        with parents as the children go through developmental stages and she is an amazing partner in
        this!&nbsp;&nbsp;I cannot speak highly enough of Zoila.&nbsp;&nbsp;She will always be a part of our family.
      </p>
    ),
    author: 'Ramelle R. (Aug 2008)'
  },
  {
    short: cb => (
      <p>
        We are Mateo’s parents. He is 7 months old now and he started to stay at Zoila’s Day care since he
        was only 2 months old. I am writing this letter of recommendation for Zoila Chang, who is responsible
        of Day Care “My First steps”.
        <br /><br />
        We are introduced to Zoila through another parents and they strongly recommended her. We are very
        happy with Zoila, other kids from the establishment and also how our son is doing very well at her
        place...
        <span className='testimonial-more'>
          <br />
          [<Link onClick={cb}>Read Full Testimonial</Link>]
        </span>
      </p>
    ),
    long: () => (
      <p>
        We are Mateo’s parents. He is 7 months old now and he started to stay at Zoila’s Day care since he
        was only 2 months old. I am writing this letter of recommendation for Zoila Chang, who is responsible
        of Day Care “My First steps”.
        <br /><br />
        We are introduced to Zoila through another parents and they strongly recommended her. We are very
        happy with Zoila, other kids from the establishment and also how our son is doing very well at her
        place. Zoila is very professional, dedicated and hard working woman. She has a lots of experience
        dealing with toddlers and infants. She is also trained to give any kind of assistance to the
        children, if it is necessary. Mostly, she is very gentle, patience and sweet with all children.
        All these factors made us choose Zoila everyday to take care of our son. We believe she and her
        family is very good person.
        <br /><br />
        Therefore, we enthusiastically recommend Zoila Chang anyone who is looking for someone to take
        care of his or her babies.
        <br /><br /><br /><br />
        Nosotros somos los padres de Mateo. El tiene ahora 7 meses de edad y comenzo en el Daycare
        “My First Steps” que conduce Zoila Chang cuando tenia solo 2 meses de edad.
        <br /><br />
        A la senora Zoila la conocimos a traves de otros padres que llevaban a sus hijos al Daycare. Nos
        decidimos por este daycare en parte por las muy buenas recomendaciones que obtuvimos del lugar.
        Nosotros estamos muy contentos con Zoila, con los otros ninos que concurren al daycare, y
        sobre todo por lo bien que se lo ve a Mateo en el lugar.
        <br /><br />
        Zoila es una persona muy profesional, dedicada y trabajadora. Ademas, posee mucha experiencia
        en el manejo de los bebes y ninos pequenos.
        <br /><br />
        Otra razon por la cual nos decidimos a traer a Mateo a este daycare, fue que Zoila posee
        entrenamiento para asistir con primeros auxilios a los ninos si fuera necesario.
        <br /><br />
        Basicamente, Zoila es muy dulce y paciente con los ninos. Ademas, escucha y respeta las consultas
        que los papas tenemos dis a dia.
        <br /><br />
        Todos estos factores nos hace elegir a Zoila cada dia para cuidar a nuestro hijo, Mateo. Consideramos
        que tanto Zoila como su familia son buenas personas.
        <br /><br />
        Sinceramente recomendamos a Zoila Chang a cualquier familia que este buscando a alguien para
        cuidar con respeto a su bebe.
      </p>
    ),
    author: 'Carolina, Ken and Mateo (Nov 2007)'
  },
  {
    short: cb => (
      <p>
        Our daughter and son have been attending My First Steps Day Care since they were 2 months old. It was easy
        to choose between Zoila and the many other day care centers we visited because the children in her care
        were obviously so fond of her and comfortable in her care. Her suggestion of a few short visits to get Amy
        used to the changes worked out well, and it took only a few days for her to settle in. Returning to work
        after the birth of my son was far easier knowing that both children were in good hands.
        <span className='testimonial-more'>
          <br />
          [<Link onClick={cb}>Read Full Testimonial</Link>]
        </span>
    </p>
    ),
    long: () => (
      <p>
        Our daughter and son have been attending My First Steps Day Care since they were 2 months old. It was easy
        to choose between Zoila and the many other day care centers we visited because the children in her care
        were obviously so fond of her and comfortable in her care. Her suggestion of a few short visits to get Amy
        used to the changes worked out well, and it took only a few days for her to settle in. Returning to work
        after the birth of my son was far easier knowing that both children were in good hands.
        <br /><br />
        Zoila is kind, nurturing and very thoughtful in her approach to children. She always discusses any changes
        or new developments with us before hand, and so as parents we feel very well informed about our children’s
        progress. As Amy started to eat solid food, she made sure that all meals were prepared at home using only
        fresh ingredients. This same attention to detail has continued with my son.
        <br /><br />
        There are many activities available for the children, and Zoila interacts with each child at the appropriate
        level. There is also a large pleasant back yard for the children to play in on warm days.
        <br /><br />
        Having no family close to the bay area, it has been good to feel that Amy and Sean have had the chance to
        have these wonderful relationships with Zoila, her family and the other children. They have become an
        important part of their lives, and we will miss them greatly when we leave San Francisco.
        <br /><br />
        Please feel free to contact us for any further information.
      </p>
    ),
    author: 'Susan and Darrin (Jun 2007)'
  },
  {
    short: cb => (
      <p>
        In summer 05 when my daughter Lucia was 19 months old, I was looking for a day care to take Lucia part time.
        <br /><br />
        A friend of mine at that time was taking her daughter to Zoila’s “My First Steps”, she had only good things
        to say about it.
        <span className='testimonial-more'>
          <br />
          [<Link onClick={cb}>Read Full Testimonial</Link>]
        </span>
      </p>
    ),
    long: () => (
      <p>
        In summer 05 when my daughter Lucia was 19 months old, I was looking for a day care to take Lucia part time.
        <br /><br />
        A friend of mine at that time was taking her daughter to Zoila’s “My First Steps”, she had only good things
        to say about it.
        <br /><br />
        I called Zoila and right away Lucia and I went to her house. Lucia loved it since the minute Zoila opened
        the door. I liked it, because it is a small and family environment. Zoila is very serious and responsible
        with her work. I knew that Lucia was going to be well take care off. I also liked that zoila and her family
        speaks Spanish.
        <br /><br />
        It was good for Lucia to have a routine, and take a nap every day from two to four, and have a snack sitting
        at the table with other kids.
        <br /><br />
        Zoila and her family was more than a day care for us, when I became pregnant she was very flexible with schedule
        and was always offering any help we needed with my difficult pregnancy. We are very thankful for this.
        <br /><br />
        Lucia was always happy to go to “Tia Zoila’s house” and play with her friends. She would talk about Tia Zoila and Tio Chi.
        <br /><br />
        Overall, I’m very happy with “My First Steps” and I will recommend to any body.
      </p>
    ),
    author: 'H. Family (Nov 2006)'
  },
  {
    short: cb => (
      <p>
        My son Paolo, who just turned two, has spent the past six months in the care of Zoila Chang. We have
        been very happy with the care he has received. The only reason we are changing our childcare arrangement
        with her is because we are moving to Oakland.
        <br /><br />
        At Zoila’s house, Paolo started eating vegetables again. He had stopped when he started cutting teeth.
        He eats all kinds of veggies now! He also started drinking milk everyday with Zoila. He was a breastfed
        baby and I was never able to get him interested in cow’s milk at home. Now he asks for it!
        <span className='testimonial-more'>
          <br />
          [<Link onClick={cb}>Read Full Testimonial</Link>]
        </span>
      </p>
    ),
    long: () => (
      <p>
        My son Paolo, who just turned two, has spent the past six months in the care of Zoila Chang. We have
        been very happy with the care he has received. The only reason we are changing our childcare arrangement
        with her is because we are moving to Oakland.
        <br /><br />
        At Zoila’s house, Paolo started eating vegetables again. He had stopped when he started cutting teeth.
        He eats all kinds of veggies now! He also started drinking milk everyday with Zoila. He was a breastfed
        baby and I was never able to get him interested in cow’s milk at home. Now he asks for it!
        <br /><br />
        Paolo has been toilet training at Zoila’s house, too. He uses the potty at home and at Zoila’s house
        regularly. The training was very gentle, relaxed and not stressful for him.
        <br /><br />
        Zoila always alerted us in a timely fashion if he seemed to be getting sick or was doing new things at
        her home. She has been very helpful making suggestions in regards to nutrition and activities to try at
        home with Paolo.
        <br /><br />
        Zoila treats each child with respect and affection. She even bakes them very individual cakes for their
        birthdays! A sure sign that he always felt comfortable and at ease in her house is that he rarely wanted
        to go home! He was too busy enjoying himself! I know he will miss her and her family very much. They
        sometimes pitched in to play and care for the children.
        <br /><br />
        Zoila provides quality care with love in her home. I think your child be happy there also!
      </p>
    ),
    author: 'Sondra F. (Jan 2006)'
  },
  {
    short: cb => (
      <p>
        I am recommending the usage of “My First Steps Day Care” under the supervision of Mrs. Zoila Chang. I
        feel the facility provides a very nurturing environment for children that are growing and away from home
        for the first time. Not only is the facility run by Mrs. Chang, but I feel it is a family oriented business.
        Her family also takes part in taking care of the children if they are at home. They are provided with both
        a home environment as well as educated in a pre-school setting.
        <span className='testimonial-more'>
          <br />
          [<Link onClick={cb}>Read Full Testimonial</Link>]
        </span>
      </p>
    ),
    long: () => (
      <p>
        I am recommending the usage of “My First Steps Day Care” under the supervision of Mrs. Zoila Chang. I
        feel the facility provides a very nurturing environment for children that are growing and away from home
        for the first time. Not only is the facility run by Mrs. Chang, but I feel it is a family oriented business.
        Her family also takes part in taking care of the children if they are at home. They are provided with both
        a home environment as well as educated in a pre-school setting.
        <br /><br />
        Mrs. Chang makes sure according to there ages, that they are taught what is necessary for the mental growth
        of the child so that they will be prepared once they go to school. The children interact with each other
        regards of there age that way no one feels left out. The child is also provided with proper nourishment
        during there daily meals together in a family setting and given food within the proper food groups
        necessary for there growth mentally and physically.
        <br /><br />
        During the time my grandson Francisco had attended “My First Steps Day Care” I noticed a lot of changes
        in his personality and the way he relates to his surroundings. He had become very courteous, polite and
        well mannered. He was able to complete his alphabets, work with various children and learned to even
        speak a few words in Spanish. Francisco learned being the only child to share his toys as well as to
        take turns in playing.
        <br /><br />
        I feel the time he spent at “My First Steps Day Care” was very important part of his childhood and help
        in his transition to taking the next step to move on.
      </p>
    ),
    author: 'Geneva G. (Sep 2005)'
  },
  {
    short: cb => (
      <p>
        Our daughter is nineteen months old and has been attending Zoila Chang’s day care three days a week
        since November 2004. Besides our daughter, there are two other children in the home care situation:
        a boy who is almost four years old and a six-month old infant girl. Zoila Chang was highly recommended
        to us by a work associate.
        <br /><br />
        Zoila Chang has a genuine vested interest in the well being of our daughter and the other children under
        her care. We are impressed with her caring nature, organization and professionalism. It is obvious she
        prides herself on being an excellent day care provider.
        <span className='testimonial-more'>
          <br />
          [<Link onClick={cb}>Read Full Testimonial</Link>]
        </span>
      </p>
    ),
    long: () => (
      <p>
        Our daughter is nineteen months old and has been attending Zoila Chang’s day care three days a week
        since November 2004. Besides our daughter, there are two other children in the home care situation:
        a boy who is almost four years old and a six-month old infant girl. Zoila Chang was highly recommended
        to us by a work associate.
        <br /><br />
        Zoila Chang has a genuine vested interest in the well being of our daughter and the other children under
        her care. We are impressed with her caring nature, organization and professionalism. It is obvious she
        prides herself on being an excellent day care provider. We are pleased that Zoila encourages us to call
        our daughter daily to see how she is doing. The environment is clean and in good order. Zoila always
        provides nutritious and balanced meals for the children. Zoila’s emphasis on good habits, living skills,
        cleanliness, and manners is apparent. Our daughter genuinely likes going to day care and has fun every day.
        <br /><br />
        We are very pleased that Zoila Chang is our daughter’s day care provider. We trust Zoila and know that our
        daughter is in an excellent care environment that is safe, educational, healthy, and fun. We would highly
        recommend Zoila as a day care provider.
      </p>
    ),
    author: 'Dean and Reena (May 2005)'
  },
  {
    short: cb => (
      <p>
        To Whom It May Concern:
        <br /><br />
        The purpose of this letter is to praise the excellent childcare services that Mrs. Zoila Chang has provided to
        my family.
        <br /><br />
        Ever since Mrs. Chang took care of my daughter, Julia at the age of 2 1/2 up to the age of 4 when she started
        Preschool, she has taught Julia self-discipline, independence and given us advice to help on her development.
        <span className='testimonial-more'>
          <br />
          [<Link onClick={cb}>Read Full Testimonial</Link>]
        </span>
      </p>
    ),
    long: () => (
      <p>
        To Whom It May Concern:
        <br /><br />
        The purpose of this letter is to praise the excellent childcare services that Mrs. Zoila Chang has provided to
        my family.
        <br /><br />
        Ever since Mrs. Chang took care of my daughter, Julia at the age of 2 1/2 up to the age of 4 when she started
        Preschool, she has taught Julia self-discipline, independence and given us advice to help on her development.
        <br /><br />
        Self-discipline is something that it is very hard to teach at such a young age; however, Mrs. Chang accomplished
        this task. In the period that my daughter spent with her, I have seen a lot of improvements on the way she behaves
        from picking up her toys after playing to taking her own dishes to the sink.
        <br /><br />
        In addition to that, my daughter became less dependent on us to help her on certain things such as brushing her
        teeth, combing her hair and putting her clothes on after her bath.
        <br /><br />
        Because of Mrs. Chang's care and dedication, my daughter, Julia, had an easier time when she started going to
        Preschool therefore I praise the help and advices that she provided my family.
        <br /><br />
        Sincerely,
      </p>
    ),
    author: 'Eva E. (Sep 2004)'
  }
]

export default State
