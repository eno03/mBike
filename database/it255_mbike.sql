-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 07, 2018 at 06:43 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `it255_mbike`
--

-- --------------------------------------------------------

--
-- Table structure for table `bicycles`
--

CREATE TABLE `bicycles` (
  `id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `model` text NOT NULL,
  `type_id` int(11) NOT NULL,
  `description` text NOT NULL,
  `url` varchar(256) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bicycles`
--

INSERT INTO `bicycles` (`id`, `brand_id`, `model`, `type_id`, `description`, `url`, `quantity`, `price`) VALUES
(8, 3, 'Gambler 710', 2, 'The SCOTT Gambler 710 is a no compromises DH weapon. This is the rig that SCOTT-Velosolutions riders Brendan Fairclough and Gaëtan Vige rely on daily. With 27.5” wheels, a custom race tuned Kashima Coated FOX Suspension and World Cup podium proven components, this bike was built for speed. Equipped with a low and slack geometry and a tweaked leverage ratio, the Gambler 710 will be able to handle everything in front of you. Following our belief that for every track there is a correct tool, this bike has been designed to be able to be converted to run 26” wheels as well.', 'https://i.pinimg.com/originals/39/e4/9b/39e49b9d37fefb95f15e2ca7536a1744.jpg', 10, 20),
(9, 3, 'Scale 910', 2, 'The SCOTT Scale 910 has geometry inspired by racing at the highest level, a Sram X01 Eagle drivetrain and Syncros components combine to give you a hard tail that is just itching to finish first.', 'https://www.cpsc.gov/s3fs-public/Recall.2014.14215.5-14xxx_2013ScottSportsterX30Men_LARGE.jpg', 10, 18),
(10, 3, 'Spark 900', 2, 'The SCOTT Spark 900 Premium\'s HMX Carbon Fiber frame is one of the lightest full suspension Carbon frames on the market. Now with Shimano XT Di2, the Premium comes fully equipped with a custom FOX Nude Shock w/Kashima coating and our TwinLoc Suspension System to always optimize your ride.', 'http://mtb.ba/usporedba/images/42.jpg', 10, 18),
(11, 3, 'SUB Sport 40', 1, 'The SCOTT SUB Sport 40 features a sporty trekking geometry that suits trips of all distances. Equipped with a Shimano 21 speed transmission, a custom Racktime carrier and compatibility with Snap\'it accessories, this bike is begging to go on an adventure. Available in Men and Lady geometries.', 'https://www.cpsc.gov/s3fs-public/Recall.2014.14215.5-14xxx_2013ScottSportsterX30Men_LARGE.jpg', 10, 14),
(12, 3, 'SUB Comfort 20', 1, 'The SCOTT SUB Comfort 20 features comfortable geometry intended for everyday use. With a Shimano 21 speed transmission and a custom Racktime carrier that is compatible with Snap-it accessories, this bike has it all with regards to trekking around.', 'http://rgbikes.com/wp-content/uploads/2017/11/bicicleta-scott-sub-sport-20-lady-2018-265461.jpg', 10, 14),
(13, 3, 'E-Silence 20', 4, 'The SCOTT E-Silence 20 makes getting around town easier. With comfortable geometry, and powered by Brose with a 500wh battery, the E-Silence 20 is the ideal commuter bike. Equipped with features like a Custom carrier with integrated lighting, the E-Silence 20 is a go to for moving from point A to Point B. Available in Men and Lady geometries.\r\n', 'https://www.vermont-ski.fr/wp-content/uploads/scott-e-genius-710-plus-800x500.jpg', 10, 22),
(14, 3, 'E-SUB Cross 20', 4, 'The SCOTT E-SUB Cross 20\'s frame is ePowered by a 400wh Bosch battery. With this you can get to where you are going faster and more comfortably than ever before. Throw in wider rims and 47c Smart Sam tires and the result is one sleek speedy and well equipped Cross E-Bike.', 'https://sklep.zuchlinski.com.pl/gfx/big/1519302300.3273.jpg', 10, 23),
(15, 3, 'Addict RC 10', 3, 'The SCOTT Addict RC 10 comes equipped with an HMF Carbon Fiber frame and fork that weigh in at just 860/360g. Throw in a compilation of high end components and you have one extremely strong and light bike that is ready for the mountain stages.', 'http://file.seekpart.com/productsimage/2014/3/15/2014315205111914494.jpg', 10, 19),
(16, 3, 'FOIL 30', 3, 'The legend of the FOIL continues, and things are about to get even better. The SCOTT FOIL 30 has been designed to be even more aerodynamic, more comfortable, and to still have that incredibly laterally stiff nature of its predecessor. Featuring an HMF Carbon Fiber frame, and integrated Syncros components, the SCOTT FOIL 30 is a race ready machine at a fraction of the cost.', 'http://bikesworld.gr/wp-content/uploads/2014/06/Scott_Foil.jpg', 10, 15),
(17, 3, 'FOIL 10', 3, 'Stage wins at all the grand tours, classic victories at Milan San Remo, Liege Bastogne Liege and Paris-Roubaix - we can safely say that the FOIL is the most versatile aero bike on the market.The SCOTT FOIL 10 Disc was designed to help you gain those extra precious seconds. With a Syncros integrated FOIL Stem and the NEW Ultegra Di2, the FOIL 10 is a race ready machine at a fraction of the cost.', 'https://coresites-cdn.factorymedia.com/twc/wp-content/uploads/2014/11/Specialized-Alias-Sport-Tri-3.jpg', 10, 23),
(18, 2, 'Full Stache 8', 2, 'Full Stache 8 is a full suspension 29+ trail bike with an oversized appetite for rugged backcountry riding. Sure-footed mid-fat tires, a 1x12 drivetrain, 130mm of front and rear travel, super short chainstays, and some ridiculously clever engineering make this 29+ trail bike the ideal rig for rugged singletrack and trail explorations into the unknown wild.', 'http://www.mtbchannel.com/photos/gammes/12/zooms/7044713204016221320401622.jpg', 10, 24),
(19, 2, 'Top Fuel 9.9 RSL', 2, 'Top Fuel 9.9 RSL is our fastest full suspension XC mountain bike. Everything on this bike is geared toward helping you go faster and perform better. An OCLV Mountain Carbon frame, carbon components, and super-lightweight full suspension setup make Top Fuel 9.9 RSL a race-ready rocket that flies over gnarly terrain on its way to the podium.', 'https://www.tentusscher.nl/wp-content/uploads/2016/11/TREK-TOP-FUEL-9.8-SL-2017.jpg', 10, 25),
(20, 2, 'Checkpoint SL 5 Women\'s', 3, 'Checkpoint SL 5 Women\'s is a carbon gravel bike made for epic all-road adventures. It\'s built with a full Shimano 105 drivetrain and hydraulic disc brakes, but the defining feature of this model is the lightweight OCLV Carbon frame with IsoSpeed, a decoupler at the top tube/seat tube junction that provides additional compliance over rough terrain so you can stay stronger longer.', 'https://www.arueda.com/wp-content/uploads/2018/03/canyon-grail-cf-sl-03.jpg', 10, 26),
(21, 2, 'Checkpoint ALR 4', 3, 'Checkpoint ALR 4 Women\'s is an aluminum gravel bike that offers an incredible amount of capability for the price. It\'s built for the rigors of gravel and dirt roads, but it\'s also right at home on morning commutes and centuries. This bike knows no boundaries, which makes it the ideal gateway to adventure on any road or path.', 'https://www.arueda.com/wp-content/uploads/2018/03/canyon-grail-cf-sl-02.jpg', 10, 25),
(22, 2, 'Émonda SLR 8', 3, 'Émonda SLR 8 pairs the lightest road bike frame we make with a top-of-the-line Shimano Dura-Ace groupset and carbon Aeolus Pro 3 carbon wheels for exceptional lightweight performance. It\'s built for speed on the fastest sprints, stiffness on the steepest climbs, and an all-around ride quality that can be achieved only with our highest-end 700 Series OCLV Carbon.', 'https://www.tentusscher.nl/wp-content/uploads/2016/11/TREK-EMONDA-ALR-4-2017.jpg', 10, 23),
(23, 2, 'CrossRip+', 4, 'CrossRip+ is an e-bike that pairs the efficiency of a road bike with the capability of a high-performance Bosch system that helps you sustain speeds of up to 28 mph. A Bosch Purion controller, SRAM drivetrain, and a wealth of included accessories make CrossRip+ ideal electric bike for long commutes, riding with faster friends, and covering a lot of ground fast.', 'https://i0.wp.com/electricbikereport.com/wp-content/uploads/2016/08/Klever-x_limited-electric-bike.jpg?resize=800%2C500&ssl=1', 10, 27),
(24, 2, 'Dual Sport+', 4, 'Dual Sport+ is a versatile, go-anywhere electric hybrid bike that\'s just as much at home on the street as on more rugged terrain, like dirt roads, trails, and gravel paths. It\'s equipped with a Shimano STEPS system that helps you sustain speeds of up to 20 mph and a host of confidence-inspiring features like a suspension fork, hydraulic disc brakes, and all-terrain tires.', 'https://static1.squarespace.com/static/56f4b8092eeb81396603c793/t/5aec7a446d2a7334d87da3a2/1525447243374/TrekDualSport%2BElectric.jpg', 10, 24),
(25, 2, 'Lift+ Lowstep', 4, 'Lift+ is a cruiser-style e-bike with our most upright riding position and a stepthrough geometry that makes it easy to mount and dismount. This e-bike is built for comfort on bike paths and city streets. It\'s equipped with a Shimano pedal-assist motor that helps you sustain speeds of up to 20 mph and parts that add confidence to your ride, like hydraulic disc brakes for stopping power in all weather conditions and 10-speed shifting for even the biggest hills.', 'https://i.pinimg.com/originals/13/40/fb/1340fb831a4420ad5cc9c54a8a581cad.jpg', 10, 23),
(26, 2, 'Precaliber 12 Girl\'s', 1, 'recaliber 12 Girl\'s is the perfect first bike for little riders who are ahead of the curve and ready for two wheels at a younger age than most. It has a handle built into the saddle so you can guide them as they ride, and tool-less training wheels that are super easy to install and remove. It\'s a great fit for kids ages 3-4, between 36-40? tall. ', 'https://www.bicicletassanchis.es/7435/bicicleta-quer-18.jpg', 10, 5),
(27, 2, 'Precaliber 12 Boy\'s', 1, 'Precaliber 12 Boy\'s is the perfect first bike for little riders who are ahead of the curve and ready for two wheels at a younger age than most. It has a handle built into the saddle so you can guide them as they ride, and tool-less training wheels that are super easy to install and remove. It\'s a great fit for kids ages 3-4, between 36-40? tall. ', 'https://static1.squarespace.com/static/56f4b8092eeb81396603c793/t/599ca551e58c62a4d4e627cf/1518203477586/TrekPrecaliber_12_boys.jpg', 10, 5),
(38, 1, 'Escape City', 1, 'Built with a lightweight ALUXX aluminum frame that’s designed for smooth-rolling 700c wheels, Escape City is a fun, efficient bike that’s versatile enough for city commutes or longer rides to build up your fitness. Stable geometry and a wide range of gears make it easier to tackle hilly terrain, even when your racks and cargo bags are loaded. And it’s designed with neutral, upright positioning, which helps you navigate city streets or crowded bike paths.', 'https://www.usjcycles.com/v3/wp-content/uploads/2017/11/Giant-escape-jr-24-black-blue.jpg', 10, 12),
(39, 1, 'Escape Disc', 1, 'With its lightweight ALUXX aluminum frame and smooth, stable 700c wheels, Escape Disc is ticket to on-road versatility. Ride city streets or country roads. For commuting, fitness, or just for the fun of it. Confident upright geometry and a wide range of gears give it a sporty ride quality. Easy handling and powerful disc brakes make it a great choice for navigating city streets or crowded bike paths in all types of weather. Whatever road or path you choose, Escape Disc is always up for the adventure.', 'http://giant.cl/wp-content/uploads/2017/12/escape-2-city.png', 10, 13),
(40, 1, 'Escape', 1, 'With its lightweight ALUXX aluminum frame and smooth, stable 700c wheels, Escape is your ticket to on-road versatility. Ride city streets or country roads. For commuting, fitness, or just for the fun of it. Confident upright geometry and a wide range of gears give it a sporty ride quality. Whatever road or path you choose, Escape is always up for the adventure.', 'https://static1.squarespace.com/static/54c3bd60e4b0b06fb1d5d96a/54d50692e4b08c8065de9d62/56a8fcac2399a37e35086e2a/1453915816187/Alight-2-DD-Dark-Blue.jpg?format=1000w', 10, 12),
(41, 1, 'Simple', 1, 'With its beach cruiser DNA and its city bike comforts, Simple is at home on any road or path. Beneath the laid-back looks is a smart design with modern features including a lightweight aluminum frame and easy gearing options. And the comfy balloon tires, plush saddle, and stable upright rider positioning help give Simple its casual, worry-free ride quality.', 'https://cdn.bicyclebluebook.com/bikepedia/Simple_Seven_grey_orange.jpg', 10, 9),
(42, 1, 'Anthem 29', 2, 'Built on a totally reengineered ALUXX SL aluminum frameset featuring 90mm of rear suspension travel and 100mm up front, this all-new 29er delivers speed, balance and control on fast, technical XC terrain. It’s optimized for larger-diameter wheels with an updated Maestro suspension system that’s configured for a tighter rear triangle. The updated geometry makes it a quicker and more agile on climbs and descents. The trunnion-mount shock produces a smooth, supple feel with improved pedaling efficiency.', 'http://giant.cl/wp-content/uploads/2017/02/ANTHEM-ADV-29.png', 10, 18),
(43, 1, 'Reign Advanced', 2, 'When it comes to flying down the most extreme enduro terrain, this is the weapon of choice for Giant Factory Off-Road Team riders. Reengineered for 2018, the all-new Reign Advanced features updated geometry with a longer cockpit made with a lightweight, super stiff Advanced-grade composite mainframe and ALUXX SL aluminum rear swingarm.', 'https://bikeimages.blob.core.windows.net/bikeimages/25e9cff6-6b54-42f1-b5b4-6020e918b381.png', 10, 17),
(44, 1, 'XTC Advanced', 2, 'Built around 27.5 wheels for XC quickness and agility, this XC race machine hammers up climbs and rails through rough corners. The Advanced-grade composite frame delivers absolute efficiency and a compliant ride to help soak up technical terrain. The Overdrive steerer tube and a 100mm suspension fork create flawless front end handling whether you’re climbing, sprinting or descending rough singletrack.', 'https://www.bellatisport.com/shop/images/products//4019.png', 10, 16),
(45, 1, 'FastRoad E+', 4, 'Accelerate on the open road and take the fast lane with this lively E-bike made for road riding. The Road-E+ delivers functional performance to help you extend your on-road adventures. Blending Giant’s world-leading expertise in performance road bikes with its innovative Hybrid Cycling Technology results in an E-bike that’s powerful, efficient and fun to ride. ', 'https://cdn.shopify.com/s/files/1/0150/0690/products/Road-E-plus-1_2048x2048.jpg?v=1493835602', 10, 21),
(46, 1, 'Dirt-E+', 4, 'The all-new Dirt-E+ lets you tap into an added boost of power to help you tackle the toughest terrain. The compact SyncDrive Sport motor delivers a smooth and instantaneous boost that blends seamlessly with your own pedaling power—so you can ride stronger and longer, even on steep and challenging trails. With its stable, XC-oriented frame and integrated EnergyPak battery, the Dirt-E+ gives you the power to conquer mountains.', 'https://i.pinimg.com/originals/dc/89/c8/dc89c81b1b62456b5b43120109d42002.jpg', 10, 24),
(47, 1, 'Ease-E+', 4, 'With its purpose-built geometry, excellent weight distribution and integrated power, Ease-E+ keeps you going strong on busy commutes and all sorts of road adventures. The SyncDrive Sport motor, PedalPlus sensor system and RideControl command center, all integrated with a sporty ALUXX SL frameset, make the all-new Ease-E+ a whole new way to ride road. ', 'https://rideonmagazine.com.au/wp-content/uploads/2016/12/Gazelle-Cityzen-800x500.jpg', 10, 13),
(48, 1, 'Defy Advanced SL', 3, 'There is no better road machine for long, demanding days in the saddle. The superlight frameset is handcrafted with Giant’s pro-level Advanced SL composite and engineered with endurance geometry. Its innovative technologies include flat-mount disc brakes with 12mm front and rear thru-axles and the vibration-damping D-Fuse integrated seatpost. The oversized and tapered OverDrive 2 steerer tube boosts cornering precision.', 'https://cdn.shopify.com/s/files/1/1204/3402/products/Defy-5-Black-Red2016_2c7afdd2-ac62-4188-a851-016f11ad171e.jpg?v=1462569769', 10, 17),
(49, 1, 'TCR Advanced Pro Disc', 3, 'Awesome efficiency, a sublime ride quality, and more control than you ever thought possible. The TCR Advanced Pro Disc gives you the lightweight performance to conquer the KOM plus the confidence to push your limits on technical descents. Engineered with an Advanced-grade composite frame featuring flat-mount disc-brake integration front and rear, it’s a versatile race machine for all types of road conditions.', 'https://www.usjcycles.com/v3/wp-content/uploads/2018/01/Giant-TCR-Advanced-Pro-0-carbon.jpg', 10, 18),
(50, 1, 'TCR Advanced SL Disc', 3, 'Break away on the climb or on a fast, tricky descent. The TCR Advanced SL Disc is designed to excel in every aspect of racing, and engineered to the precise demands of top pro racers from Team Sunweb. From the superior stiffness-to-weight ratio of its Advanced SL composite frame to its integrated disc brakes including flat mounts and thru-axles—everything about this bike screams high performance. ', 'https://i.pinimg.com/originals/fe/8d/f2/fe8df2a5a7142b170959237d28af1b41.jpg', 10, 18);

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`id`, `name`) VALUES
(1, 'Giant'),
(2, 'Trek'),
(3, 'Scott'),
(4, 'Benelli');

-- --------------------------------------------------------

--
-- Table structure for table `rentals`
--

CREATE TABLE `rentals` (
  `id` int(11) NOT NULL,
  `bike_id` int(11) NOT NULL,
  `email` text NOT NULL,
  `firstname` text NOT NULL,
  `lastname` text NOT NULL,
  `address` text NOT NULL,
  `start` text NOT NULL,
  `end` text NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `delivered` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rentals`
--

INSERT INTO `rentals` (`id`, `bike_id`, `email`, `firstname`, `lastname`, `address`, `start`, `end`, `quantity`, `price`, `delivered`) VALUES
(12, 10, 'nikola.obucina03', 'Nikola', 'Peric', 'Svetog Save 55', '2018-06-21', '2018-06-27', 1, 108, 1),
(13, 10, 'xanu@mailinator.com', 'Ronan', 'England', 'Quis dolorem aperiam et qui sequi cupidatat voluptatem qui ea exercitation aut exercitationem sit rerum commodi occaecat autem ullam', '2018-06-19', '2018-06-22', 3, 162, 1),
(15, 9, 'marko@gmail.com', 'Nikola', 'Obucina', 'Kajmakcalanska 35', '2018-06-19', '2018-06-20', 1, 18, 1),
(16, 10, 'petar@gmail.com', 'Marko', 'Obucina', 'Kajmakcalanska 35', '2018-06-22', '2018-06-23', 2, 36, 0),
(17, 9, 'marko@gmail.com', 'Petar', 'Peric', 'Kajmakcalanska 35', '2018-06-22', '2018-06-23', 2, 36, 0),
(18, 9, 'kiru@mailinator.com', 'Ocean', 'Vaughan', 'Velit sit est voluptate recusandae Sed aut voluptatum aut ab eos culpa deserunt id dolor est incididunt eligendi suscipit neque', '2018-06-01', '2018-08-03', 9, 10206, 0),
(19, 10, 'vulip@mailinator.net', 'McKenzie', 'Barr', 'Et inventore dolor culpa qui qui sunt autem qui odio in nostrud officia anim nihil aut', '1998-01-20', '1989-12-24', 178, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(0, 'User'),
(1, 'Administrator');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `name`) VALUES
(0, 'daily'),
(1, 'group');

-- --------------------------------------------------------

--
-- Table structure for table `tours`
--

CREATE TABLE `tours` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `url` varchar(256) NOT NULL,
  `start` text NOT NULL,
  `time` text NOT NULL,
  `price` int(11) NOT NULL,
  `status_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tours`
--

INSERT INTO `tours` (`id`, `title`, `description`, `url`, `start`, `time`, `price`, `status_id`) VALUES
(1, 'City Center Tour', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem provident corrupti, sed obcaecati officia consequatur rerum impedit magni facere soluta repellat nam. Ratione ipsa numquam tempore, eligendi unde beatae debitis.', 'https://www.priboj033.com/wp-content/uploads/2013/01/NV-800x500_c.jpg', 'Starts every day at 14.00 pm', '3 hour tour', 17, 0),
(2, 'Uvac Riverside Tour', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem provident corrupti, sed obcaecati officia consequatur rerum impedit magni facere soluta repellat nam. Ratione ipsa numquam tempore, eligendi unde beatae debitis', 'https://etnosaponjic.com/public/site/images/home-slide1920_700.jpg', 'Starts every day at 14.00 pm', '4 hour tour, break with drink included', 22, 0),
(3, 'Zlatibor Tour', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem provident corrupti, sed obcaecati officia consequatur rerum impedit magni facere soluta repellat nam. Ratione ipsa numquam tempore, eligendi unde beatae debitis', 'https://www.priboj033.com/wp-content/uploads/2017/10/Par-prirode-Zlatibor-800x500_c.jpg', 'Starts every day at 14.00 pm', '1 day tour', 40, 0),
(4, 'Belgrade Tour', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem provident corrupti, sed obcaecati officia consequatur rerum impedit magni facere soluta repellat nam. Ratione ipsa numquam tempore, eligendi unde beatae debitis', 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/01/09/14/belgrade-city-centre.jpg', '18th July 2018', '8 Days / 7 Nights ', 120, 1),
(5, 'Sveti Stefan Tour', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem provident corrupti, sed obcaecati officia consequatur rerum impedit magni facere soluta repellat nam. Ratione ipsa numquam tempore, eligendi unde beatae debitis', 'https://4d0850cecf2c5ce919d5-17b283ac00835b5ced4db83c898330a1.ssl.cf1.rackcdn.com/17498253_traveltips-the-best-tips-for_t30de81a6.jpg', '29th July 2018', '9 Days / 8 Nights', 290, 1);

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

CREATE TABLE `type` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `type`
--

INSERT INTO `type` (`id`, `name`) VALUES
(1, 'City bike'),
(2, 'Mountain bike'),
(3, 'Road bike'),
(4, 'Ebike');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` text NOT NULL,
  `lastname` text NOT NULL,
  `address` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `role_id` int(11) NOT NULL,
  `token` varchar(256) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `address`, `email`, `password`, `role_id`, `token`) VALUES
(3, 'Petar', 'Peric', 'Beogradska', 'petar@gmail.com', '21232f297a57a5a743894a0e4a801fc3', 1, 'cd926a2704974165fd3bcb66c524f2d7d8b035bf'),
(6, 'Nikola', 'Obucina', 'Svetog Save 55', 'eno03@gmail.com', '0192023a7bbd73250516f069df18b500', 1, '80567a50ac191eaf8d702b5cbbfb78349a1dfbfe'),
(7, 'Zelenia', 'Campbell', 'Makedonska 23', 'gudo@mailinator.net', 'c58a7740d98f4419986a4539d2d917d7', 0, '01fcc05b62a601e140bf56db8a8b5700ca526ca8'),
(9, 'Marko', 'Markovic', 'Kajmakcalanska 35', 'marko@gmail.com', 'c28aa76990994587b0e907683792297c', 1, 'f91f6b81b7f246bce6b3f1489da7b1961426f2be'),
(10, 'Meghan', 'Mcgee', 'Aliquip incidunt sed nemo eius nisi consequat', 'tome@mailinator.net', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', 0, '918cc5b30ec7f685bdd832341311344a93165e67'),
(11, 'Erasmus', 'Mooney', 'Sit voluptatum ut id temporibus deserunt non quia in soluta et ut aliquam aut', 'gaxot@mailinator.net', '97557f40e0081f683f36b738916cfb46', 1, '1fd5792f96578e1f36a7bb420692c69ef18ef071'),
(12, 'Justina', 'Kennedy', 'Qui expedita consequatur mollitia sit iste', 'buxopobu@mailinator.net', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', 0, '43521c73fd721de8736b22e0cd7a8aeade836b27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bicycles`
--
ALTER TABLE `bicycles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type_id` (`type_id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rentals`
--
ALTER TABLE `rentals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bike_id` (`bike_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tours`
--
ALTER TABLE `tours`
  ADD PRIMARY KEY (`id`),
  ADD KEY `status_id` (`status_id`);

--
-- Indexes for table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bicycles`
--
ALTER TABLE `bicycles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `rentals`
--
ALTER TABLE `rentals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tours`
--
ALTER TABLE `tours`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `type`
--
ALTER TABLE `type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bicycles`
--
ALTER TABLE `bicycles`
  ADD CONSTRAINT `bicycles_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `type` (`id`),
  ADD CONSTRAINT `bicycles_ibfk_2` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`);

--
-- Constraints for table `rentals`
--
ALTER TABLE `rentals`
  ADD CONSTRAINT `rentals_ibfk_1` FOREIGN KEY (`bike_id`) REFERENCES `bicycles` (`id`);

--
-- Constraints for table `tours`
--
ALTER TABLE `tours`
  ADD CONSTRAINT `tours_ibfk_1` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
