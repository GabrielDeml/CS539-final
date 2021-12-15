import logo from './logo.svg';
import './App.css';
import YoutubeEmbed from "./youtube.js";
import segmentation from "./images/download.jpeg";
import dataset_image from "./images/2021-12-15_14-01.png";
import enet_image from "./images/2021-12-15_15-30.png";
import enet_image_2 from "./images/2021-12-15_15-30_1.png";
import enet_image_3 from "./images/2021-12-15_14-22_2.png";
import enet_image_4 from "./images/2021-12-15_14-22.png";
import enet_image_5 from "./images/2021-12-15_14-21_2.png";
import enet_image_6 from "./images/2021-12-15_15-38.png";
import enet_image_7 from "./images/2021-12-15_14-21_1.png";
import enet_image_8 from "./images/2021-12-15_14-21.png";
import enet_image_9 from "./images/2021-12-15_15-42.png";

function App() {
  return (

    <div className="App">

      <header className="App-header">
        <h1>CS 539 Machine Learning</h1>
        <h3>Professor</h3>
        <p>Kyumin Lee</p>
        <h3>Team Members</h3>
        <p>Khizar Mohammed Amjed Mohamed, Gabriel Deml, Ghokulji Selvaraj, Samarth Shah, Akhil Daphara</p>
        <h3>Project Description</h3>
        <h4>What is Semantic segmentation?</h4>
        <p>A picture consists of objects in it, like trees, cars, people, etc. These objects are called classes. Each of these classes is made up of a set of pixels. Semantic segmentation is a technique where we label each pixel according to the class it belongs to. However, it doesn’t differentiate between different instances of the same object. For example, if there are two cats in a picture. Semantic segmentation would not be able to assign each cat a different label.</p>
        <img src={segmentation} alt="Segmentation Example" className="image_center" />
        <figcaption className='image_caption'>Figure 1. Picture was taken from http://cs231n.stanford.edu/slides/2017/cs231n_2017_lecture11.pdf</figcaption>
        <h4>Why use semantic segmentation in Autonomous driving domains?</h4>
        <p>Autonomous vehicles are real-time domains where decisions need to be made in the order of milliseconds. Semantic segmentation takes videos captured in a self-driving environment and annotates every pixel of every frame in a video. These segmented videos are then used to calculate the driveable areas on an image.  It is therefore crucial that semantic segmentation is both fast and accurate.</p>
        <h3>Project Goals</h3>
        <p>With our initial literature survey, we came upon the E-net Neural Network architecture, used for real-time semantic segmentation. The authors of this architecture claimed that it could semantically segment videos at a rate of  135.4 frames per second on a Titan X GPU. However, it lacked accuracy. Therefore we decided to make changes to the architecture to improve the accuracy without a considerable loss in speed. In summary, these were the objectives of our project.</p>
        <ol>
          <li>Train and test the E-Net and Segnet Convolutional Neural Networks.</li>
          <li>Suggest possible improvements in the E-Net model to increase its performance.</li>
        </ol>
        <h3>Tools Used</h3>
        <p>E-Net is a relatively small Neural Network. It has around 0.37M parameters. Because of the small size of the architecture, we were able to train it on our Laptops. We used an Nvidia GeForce GTX 1050 (4GB GDDR5) GPU and Intel Core i7-7700HQ 2.8-3.8GHz CPU. However, we also intermittently used Google Co-Lab to test out design changes.</p>
        <h4>Dataset</h4>
        <p>The CItyscape dataset was used as it contains high-quality pictures of urban and road scenes. Since we are focusing on the autonomous vehicles domain, this dataset suited our purposes.</p>
        <p>Two versions of the dataset were used for the project. The full dataset contained all the fine image data available on CItyscapes. However, since using the entire dataset would take a considerable amount of time, a reduced dataset set was created which was roughly half the size. This reduced dataset was primarily used for testing small design changes. The details of both versions of the dataset are provided in the figure below. </p>
        <img src={dataset_image} alt="Dataset Images" className="image_center" />
        <figcaption className='image_caption'>Figure2: Versions of the dataset used include the half and full dataset</figcaption>
        <h3>Basic E-Net architecture</h3>
        <p>The E-Net architecture contains a convolutional neural network in both the encoder and decoder stages. It is also heavily inspired by ResNet architecture as it uses bottleneck modules in the encoder and decoder stages. Further explanation of the architecture can be found <a href="https://arxiv.org/pdf/1606.02147.pdf">here</a>. We ran the base E-Net architecture with the parameters mentioned in Figure 3 on the above-mentioned hardware and were able to achieve the results shown in Figure 5.</p>
        <img src={enet_image} alt="E-Net Architecture" className="image_center" />
        <figcaption className='image_caption'>Figure 3: Base E-Net architecture</figcaption>
        <p><br></br></p>
        <img src={enet_image_2} alt="E-Net Architecture" className="image_center" />
        <figcaption className='image_caption'>Figure4: Visual Representation of the E-Net architecture.</figcaption>
        <p><br></br></p>
        <img src={enet_image_3} alt="E-Net Architecture" className="image_center" />
        <figcaption className='image_caption'>Figure5: Results of the Base-Enet Architecture.</figcaption>
        <h3>Experiments</h3>
        <h4>Activation functions</h4>
        <p>Activation functions are applied between every convolution, hence they play an important role in deciding how we learn our weights.  In our experiments, we decided to change the activation functions to see how it affects our accuracy.</p>
        <img src={enet_image_4} alt="E-Net Architecture" className="image_center" />
        <figcaption className='image_caption'>Figure 6: Results comparing the change in mean IOU with the change in the encoder-decoder activation.</figcaption>
        <h4>Increased Bottlenecks</h4>
        <p>The E-Net architecture has an unbalanced encoder-decoder structure. The authors built this on the intuition that the decoder is only meant to fine-tune the results. However, we decided to test this hypothesis and increased the bottlenecks in the decoder. The results of our experiments can be found in figure 7.</p>
        <img src={enet_image_5} alt="E-Net Architecture" className="image_center" />
        <figcaption className='image_caption'>Figure 7: Effect of increased bottlenecks on the mean IOU compared with the Base E-net</figcaption>
        <h3>Results</h3>
        <p>Out of all the experiments we conducted, trying the Mish activation function on the entire dataset yielded the best results. The reason for this is given below.</p>
        <h4>Mish Activation Function</h4>
        <p>The bottleneck modules in the encoder have negative weights. The E-Net uses PReLU as the activation function between each convolution. Mish activation performed well because of its smoothness and non-monotonic properties. The intuition behind using Mish is that the smoothness helps in easier optimization and generalization. The non-monotonic property of Mish helps preserve the small negative weights, which helps in capturing patterns underlying the data. Figure 8 compares Mish with other activation functions.</p>
        <img src={enet_image_6} alt="E-Net Architecture" className="image_center" />
        <figcaption className='image_caption'>Figure 8: Comparison of activation functions</figcaption>
        <p><br></br></p>
        <img src={enet_image_7} alt="E-Net Architecture" className="image_center" />
        <figcaption className='image_caption'>Figure 9: Results of the Modified E-net, Mean IoU and Class IoU</figcaption>
        <p><br></br></p>
        <img src={enet_image_8} alt="E-Net Architecture" className="image_center" />
        <figcaption className='image_caption'>Figure 10: summary of the comparison between the modified E-Net and the base E-net</figcaption>
        <p><br></br></p>
        <img src={enet_image_9} alt="E-Net Architecture" className="image_center" />
        <figcaption className='image_caption'>Figure 11: Comparison of the change in the Class IoU between Modified E-Net and base E-Net.</figcaption>
        <p>From figure 11, it is observed that there is an increase in the Class IoU of smaller objects ( Pole, Fence, Rider, Traffic Light). Mish preserves the small negative weights which might be the reason we are seeing an increased IOU in the small object classes.</p>
        <h3>Example output of the model</h3>
        <h4>Modified Model on the Cityscape dataset</h4>
        <YoutubeEmbed embedId="Yd0H_Sd_PYo" />
        <h4>Modified Model on WPI campus</h4>
        <YoutubeEmbed embedId="yfLXqceukQU" />
        <h3>Discussions</h3>
        <h4>SegNet</h4>
        <p>SegNet takes a long time to train. It would have taken over a week to train to 200 epocs on the CityScapes dataset using our computers. Because of the time to train we were unable to train SegNet to a reasonable accuracy. Taking so much compute power to train the model may not be a problem for large autonomous car producers, it is a problem for smaller groups. Enet is the clear winner in the category of performance.</p>
        <p>Our intent at first was to write SegNet ourselves based on the paper and compare it to Enet. We were able to make significant progress on this over a couple of weeks. Given a few more weeks we would have been able to finish. We kept having problems with our model and decided to train a model already written. This is where we realized that even if we wrote our own model that it would not be possible for us to train it.</p>
        <p>We are not out of luck with using SegNet as a baseline. The Enet paper compares Enet with SegNet on the cityscapes dataset. This is what we can compare our improvements to Enet with.</p>
        <h3>Papers</h3>
        <ol>
          <li>Yu, H., Yang, Z., Tan, L., Wang, Y., Sun, W., Sun, M., & Tang, Y. (2018). Methods and datasets on semantic segmentation: A review. Neurocomputing, 304, 82–103. https://doi.org/10.1016/j.neucom.2018.03.037.</li>
          <li>Paszke, A., Chaurasia, A., Kim, S., & Culurciello, E. (2016, June 7). Enet: A deep neural network architecture for real-time semantic segmentation. arXiv.org. Retrieved October 27, 2021, from https://arxiv.org/abs/1606.02147.</li>
          <li>Badrinarayanan, V., Kendall, A., & Cipolla, R. (2016, October 10). SegNet: A deep convolutional encoder-decoder architecture for image segmentation. arXiv.org. Retrieved October 27, 2021, from https://arxiv.org/abs/1511.00561.</li>
          <li>Long, J., Shelhamer, E., & Darrell, T. (2015, March 8). Fully convolutional networks for semantic segmentation. arXiv.org. Retrieved October 27, 2021, from https://arxiv.org/abs/1411.4038.</li>
        </ol>
        <h3>GitHub repos used</h3>
        <ol>
          <li>Enet original code: <a href="https://github.com/davidtvs/PyTorch-ENet">https://github.com/davidtvs/PyTorch-ENet</a></li>
          <li>Enet modified code: <a href="https://github.com/GabrielDeml/PyTorch-ENet">https://github.com/GabrielDeml/PyTorch-ENet </a></li>
          <li>SegNet original source: <a href="https://github.com/xiaoyufenfei/Efficient-Segmentation-Networks">https://github.com/xiaoyufenfei/Efficient-Segmentation-Networks</a></li>
        </ol>

      </header>
    </div>
  );
}

export default App;
