			</div>
			
		</div>
		
	</div>
	
	<a name="bottom"></a>
	
	<div id="bottom">
	</div>

    <script type="text/javascript" src="/js/jquery-1.6.4.min.js"></script>

	<script type="text/javascript">
		session_id = '<?php echo $this->session->userdata('session_id'); ?>';
	</script>

	<script type="text/javascript" src="/js/global.js"></script>

<?php
  if ($this->agent->is_mobile()) { 
    echo 	'<script type="text/javascript" src="/js/mobile.js"></script>';
  }
?>
	
</body>
</html>