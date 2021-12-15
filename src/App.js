import logo from './logo.svg';
import './App.css';
import YoutubeEmbed from "./youtube.js";

function App() {
  return (

    <div className="App">

      <header className="App-header">
        <h1>CS 539 Machine Learning</h1>
        <h3>Professor</h3>
        <p>Kyumin Lee</p>
        <h3>Team Members</h3>
        {/* Youtube video embed */}
        <YoutubeEmbed embedId="Yd0H_Sd_PYo" />
        <p>Khizar Mohammed Amjed Mohamed, Gabriel Deml, Ghokulji Selvaraj, Samarth Shah, Akhil Daphara</p>
        <h3>Project Description</h3>
        <p>Autonomous vehicles are real-time domains where decisions need to be made in the order of milliseconds. Semantic segmentation takes videos captured in a self-driving environment and annotates every pixel of every frame in a video. These segmented videos are then used to calculate the driveable areas on an image. </p>
        <h3>Challenges</h3>
        {/* Numbered list */}
        <ol>
          <li>The current architecture such as ENet and SegNet are fast but have a low mean Intersection over Union (mIoU).Hence the challenge is to find different methods that would help us increase this criteria.Extensive Literature survey of various neural network architectures is required to draw intuition in order to bring about a change.</li>
          <li>Deep learning techniques are often criticized to heavily depend on a large quantity of labeled data, and training a neural network on such a large dataset requires a lot of computational resources. </li>
          <li>External conditions could also influence the performance of the model. A model could perform poorly with external factors including the lighting and shadows, weather conditions, and so on.</li>
        </ol>
        <h3>Objective</h3>
        <p>Two popular architectures used for real-time semantic segmentation are ENet and SegNet. The main objectives that our team aims to accomplish include:</p>
        <ol>
          <li>Build the E-Net and SegNet model and compare its performance for performing Semantic Segmentation.</li>
          <li>Suggest possible improvements in the E-Net model to increase its performance.</li>
        </ol>
        <h3>Evaluation</h3>
        <p>Paszke et al2 have reported that the ENet architecture  is upto 18x faster, requires 75x less FLOPs, has 79x less parameters when compared to existing models.However the IoU of the ENet architecture is less when compared with other Neural Network architectures.To demonstrate the usefulness of our improved ENet architecture, we shall attempt to achieve a greater mean IoU.A description of IoU and FPS have been provided below.</p>
        <h5>Intersection over union(IoU): </h5>
        <p>
          
          The area of overlap between the ground truth and the prediction, divided by the area of union between the prediction and the ground truth is called Intersection over union.It is measured between 0–100% where 0 implies  no overlap and 1 implies perfectly overlapping segmentation.
        </p>
        
          <h5>Frames per second (FPS): </h5>
          <p>
          The number of frames in a video that can be semantically segmented in a second is referred to as FPS. Since our semantic segmentation task is aimed towards autonomous driving, an FPS that is higher than the Image acquisition rate of the camera would provide real time semantic segmentation.
        </p>
        <h3>Resources</h3>
        <p>The Cityscape dataset contains 5000 fine-annotated images with the ground truth. These images are captured from several cities in good/medium weather conditions and have 30 classes. Different road scenarios are captured which consist of many pedestrians and cyclists. This dataset was selected as it provides good diversity, complexity and volume, to our training data.</p>
          
        <h3>Papers</h3>
        <ol>
          <li>Yu, H., Yang, Z., Tan, L., Wang, Y., Sun, W., Sun, M., & Tang, Y.(2018).Methods and datasets on semantic segmentation: A review.Neurocomputing, 304, 82–103. https://doi.org/10.1016/j.neucom.2018.03.037</li>
          <li>Paszke, A., Chaurasia, A., Kim, S., & Culurciello, E.(2016, June 7).Enet: A deep neural network architecture for real-time semantic segmentation.arXiv.org.Retrieved October 27, 2021, from https://arxiv.org/abs/1606.02147.</li>
          <li>Badrinarayanan, V., Kendall, A., & Cipolla, R.(2016, October 10).SegNet: A deep convolutional encoder-decoder architecture for image segmentation.arXiv.org.Retrieved October 27, 2021, from https://arxiv.org/abs/1511.00561.</li>
          <li>Long, J., Shelhamer, E., & Darrell, T.(2015, March 8).Fully convolutional networks for semantic segmentation.arXiv.org.Retrieved October 27, 2021, from https://arxiv.org/abs/1411.4038.</li>
        </ol>
      </header>
    </div>
  );
}

export default App;
