   <!-- Normal Camera -->
      
       <sensor name="camera" type="camera">
        <pose>0 0 -0.3 0 0 0</pose>
        <camera>
          <horizontal_fov>2.0</horizontal_fov>
          <image>
            <width>640</width>
            <height>480</height>
          </image>
          <clip>
            <near>0.05</near>
            <far>15000</far>
          </clip>
        </camera>
        <always_on>1</always_on>
        <update_rate>10</update_rate>
        <visualize>1</visualize>

        <plugin filename="CameraZoomPlugin"
            name="CameraZoomPlugin">
          <max_zoom>125.0</max_zoom>
          <slew_rate>0.42514285714</slew_rate>
        </plugin>
        
        <plugin name="GstCameraPlugin"
            filename="GstCameraPlugin">
          <udp_host>127.0.0.1</udp_host>
          <udp_port>5600</udp_port>
          <use_basic_pipeline>true</use_basic_pipeline>
          <use_cuda>false</use_cuda>
        </plugin> 
      </sensor>
      
      
      
      
/MissionPlanner/MissionPlanner/bin/Debug/net461

http://11.42.38.234:8000
